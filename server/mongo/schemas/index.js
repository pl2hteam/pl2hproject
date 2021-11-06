const mongoose = require('mongoose');

const config = require("../configmongo/key");

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect(config.mongoURI, {
    dbName: 'project',
    useNewUrlParser: true,
    useCreateIndex: true,
  }, (error) => {
    if (error) {
      console.log('MongoDB 연결 에러', error);
    } else {
      console.log('*** MongoDB 연결 성공 ***');
    }
  });
};

mongoose.connection.on('error', (error) => {
  console.error('MongoDB 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('MongoDB 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;