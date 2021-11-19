import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../Common/_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const LoginPage = (props) => {
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
          .email("미쳤어? 이메일 형식이 안맞잖아")
          .required("아이디 써라"),
        password: Yup.string()
          .min(6, "6개 이상 써라")
          .required("비밀번호도 써라"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            db: false, // SHOP
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
                props.history.push("/shop/main");
              } else {
                setFormErrorMessage("틀렸잖아 다시 써");
              }
            })
            .catch((err) => {
              setFormErrorMessage("틀렸잖아 다시 써");
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
          <div className="MainLogin pl2h-main">
            <div className="login">
              <div className="container">
                <h1 className="login_page_title">SHOP</h1>
                <div className="app">
                  <form onSubmit={handleSubmit}>
                    {/* <div className="base-container" ref={this.props.containerRef}> */}
                    <div className="base-container">
                      <div className="content">
                        <div className="image"></div>
                        <div className="form">
                          <div className="form-group">
                            {/* <label htmlFor="username"></label> */}
                            <input
                              id="email"
                              placeholder="너 이메일 넣어"
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
                            {errors.email && touched.email ? (
                              <div className="input-feedback">
                                {errors.email}
                              </div>
                            ) : (
                              <div className="input-feedback"></div>
                            )}
                          </div>
                          <div className="form-group">
                            {/* <label htmlFor="password"></label> */}
                            <input
                              id="password"
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
                            {errors.password && touched.password ? (
                              <div className="input-feedback">
                                {errors.password}
                              </div>
                            ) : (
                              <div className="input-feedback"></div>
                            )}
                          </div>
                          {formErrorMessage && formErrorMessage !== "" ? (
                            <div className="input-feedback">
                              {formErrorMessage}
                            </div>
                          ) : (
                            <div className="input-feedback"></div>
                          )}
                          <div className="rememberMe_box">
                            <input
                              type="checkbox"
                              id="rememberMe"
                              onChange={handleRememberMe}
                              checked={rememberMe}
                            />
                            <label>ID 기억하기</label>
                          </div>
                        </div>
                      </div>
                      <div className="footer">
                        <button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                          disabled={isSubmitting}
                          onSubmit={handleSubmit}
                        >
                          샵 로그인
                        </button>
                      </div>

                      <a
                        className="login-form-forgot"
                        href="/reset_user"
                        style={{ float: "right" }}
                      >
                        forgot password
                      </a>
                      <a href="/register"> 회원가입</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginPage);
