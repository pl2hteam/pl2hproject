import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../Common/_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const SnsLoginPage = (props) => {
  const dispatch = useDispatch();


  const [formErrorMessage, setFormErrorMessage] = useState("");


  return (
    <Formik
      initialValues={{
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email("").required("이메일을 입력하세요"),
        password: Yup.string()
          .min(6, "비밀번호는 6자 이상 입력하세요")
          .required("비밀번호를 입력하세요"),
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
                props.history.push("/sns/main");
              } else {
                setFormErrorMessage("이메일 또는 비밀번호가 틀렸습니다.");
              }
            })
            .catch((err) => {
              setFormErrorMessage("이메일 또는 비밀번호가 틀렸습니다.");
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
                          placeholder=" 아이디 (이메일)"
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
                          placeholder=" 비빔번호"
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
                    로그인
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

export default withRouter(SnsLoginPage);
