const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
const { sequelize } = require("./mysql/models");
const passportConfig = require("./mysql/passport");
dotenv.config();

/* DB 라우터 */
const mysqlRouter = require("./mysql/routes");
const mongoRouter = require("./mongo/routes");
const passport = require("passport");

const app = express();
passportConfig();
const cors = require("cors");
app.set("port", process.env.PORT || 5000);

/* 시퀄라이즈 연결 */
sequelize
  .sync({ focus: false })
  .then(() => {
    console.log("*** MySQL 연결 성공 ***");
  })
  .catch((err) => {
    console.error(err);
  });

/* 몽고 DB 연결 */
const connect = require("./mongo/schemas");
connect();

app.use(morgan("dev"));
app.use(cors());

app.use(express.static(path.join(__dirname, "")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

/* DB 별 라우터 */
app.use("/api/mysql", mysqlRouter);
app.use("/api/mongo", mongoRouter);

/* 404 처리 */
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

/* error 처리 */
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  return res.status(400).send(err);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
