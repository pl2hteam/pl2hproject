import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../Common/_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import '../../../Common/style/login.css';

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const [formErrorMessage, setFormErrorMessage] = useState("");

  return (
    <Formik
      initialValues={{
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("미췃서? 이메일 형식이 안맞잖아")
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
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="app">
            <form onSubmit={handleSubmit}>
              <div className="base-container" ref={props.containerRef}>
                <div className="content">
                  <div className="form">
                    <div className="form-group">
                      <div>
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
                      </div>
                      {errors.email && touched.email ? (
                        <div className="input-feedback">{errors.email}</div>
                      ) : (
                        <div className="input-feedback"></div>
                      )}
                    </div>
                    <div className="form-group">
                      <div>
                        <input
                          id="password"
                          placeholder=" 비밀번호"
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
                      </div>
                      {errors.password && touched.password ? (
                        <div className="input-feedback">{errors.password}</div>
                      ) : (
                        <div className="input-feedback"></div>
                      )}
                    </div>
                    {formErrorMessage && formErrorMessage !== "" ? (
                      <div className="input-feedback">{formErrorMessage}</div>
                    ) : (
                      <div className="input-feedback"></div>
                    )}
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
                  <div>
                    <a className="back" href="/">뒤로가기</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginPage);
