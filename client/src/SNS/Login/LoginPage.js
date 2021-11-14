import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../Common/_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";


const SnsLoginPage = (props) => {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            db: true, // SNS
          };

          dispatch(loginUser(dataToSubmit))
            .then((response) => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem("userId", response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem("rememberMe", values.id);
                } else {
                  localStorage.removeItem("rememberMe");
                }
                props.history.push("/sns/main");
              } else {
                setFormErrorMessage("Check out your Account or Password again");
              }
            })
            .catch((err) => {
              setFormErrorMessage("Check out your Account or Password again");
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <form onSubmit={handleSubmit} style={{ width: "350px" }}>
              {/* <div className="base-container"  */}
              <div className="base-container" ref={props.containerRef}>
                <div className="content">
                  <div className="form">
                    <div className="form-group">
                      <label htmlFor="username">E-mail</label>
                      <input id="email"
                        placeholder="Enter your email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email
                            ? "text-input error"
                            : "text-input"
                        }
                      />
                      {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input id="password"
                        placeholder="Enter your password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password
                            ? "text-input error"
                            : "text-input"
                        }
                      />
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                    </div>
                    {formErrorMessage && (
                      <label>
                        <p
                          style={{
                            color: "#ff0000bf",
                            fontSize: "0.7rem",
                            border: "1px solid",
                            padding: "1rem",
                            borderRadius: "10px",
                          }}
                        >
                          {formErrorMessage}
                        </p>
                      </label>
                    )}
                  </div>
                </div>
                <div className="footer">
                  <button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ minWidth: "100%" }}
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                  >
                    SNS Login
                  </button>
                </div>
                <input type="checkbox"
                  id="rememberMe"
                  onChange={handleRememberMe}
                  checked={rememberMe}
                />
                ID 기억하기
                {/* <a
                  className="login-form-forgot"
                  href="/reset_user"
                  style={{ float: "right" }}
                >
                  forgot password
                </a>
                <a href="/register"> 회원가입</a> */}
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default withRouter(SnsLoginPage);
