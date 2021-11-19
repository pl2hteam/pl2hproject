import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerCart, registerUser } from "../../Common/_actions/user_actions";
import { useDispatch } from "react-redux";

import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
        address: "",
        gender: "",
        role: "",
        phone: "",
        birth: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("이메일 형식으로 쓰거라")
          .required("이메일 주소 좀 쓰거라"),
        name: Yup.string().required("이름 좀 쓰거라"),
        password: Yup.string()
          .min(6, "비밀번호는 여섯자리 이상이란다")
          .required("비밀번호 쓰거라"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "비밀번호 두개 일치시키렴")
          .required("비밀번호 한번 더 쓰렴"),
        address: Yup.string().required("주소를 적으렴"),
        gender: Yup.string().required("네 성별이 뭐니?"),
        phone: Yup.string().required("전화번호 뭐에요"),
        birth: Yup.string().required("언제 태어났니"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            name: values.name,
            password: values.password,
            address: values.address,
            gender: values.gender,
            phone: values.phone,
            birth: values.birth,
            //image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
            db: true, // MySQL
          };

          let dataToMongo = {
            email: values.email,
            name: values.name,
            address: values.address,
            gender: values.gender,
            phone: values.phone,
          };

          dispatch(registerUser(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              dispatch(registerCart(dataToMongo)).then((response) => {
                if (response.payload.success) {
                  window.location.replace("/sns");
                } else {
                  alert(response.payload.err);
                }
              });
            } else {
              alert(response.payload.err);
            }
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
            <Form
              className="register_form"
              style={{ minWidth: "375px" }}
              {...formItemLayout}
              onSubmit={handleSubmit}
            >
              <Form.Item required label="이름">
                <Input
                  id="name"
                  placeholder="이름을 입력하세요."
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && touched.name ? (
                  <div className="input-feedback">{errors.name}</div>
                ) : (
                  <div className="input-feedback"></div>
                )}
              </Form.Item>

              <Form.Item
                required
                label="이메일"
                hasFeedback
                validateStatus={
                  errors.email && touched.email ? "error" : "success"
                }
              >
                <Input
                  id="email"
                  placeholder="이메일을 입력하세요."
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
                  <div className="input-feedback">{errors.email}</div>
                ) : (
                  <div className="input-feedback"></div>
                )}
              </Form.Item>

              <Form.Item
                required
                label="비밀번호"
                hasFeedback
                validateStatus={
                  errors.password && touched.password ? "error" : "success"
                }
              >
                <Input
                  id="password"
                  placeholder="비밀번호를 입력하세요."
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
                  <div className="input-feedback">{errors.password}</div>
                ) : (
                  <div className="input-feedback"></div>
                )}
              </Form.Item>

              <Form.Item required label="비밀번호 확인" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="비밀번호 확인을 위해 한 번 더 입력하세요."
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                ) : (
                  <div className="input-feedback"></div>
                )}
              </Form.Item>

              <Form.Item required label="주소">
                <Input
                  id="address"
                  placeholder="주소를 입력하세요."
                  type="text"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.address && touched.address
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.address && touched.address ? (
                  <div className="input-feedback">{errors.address}</div>
                ) : (
                  <div className="input-feedback"></div>
                )}
              </Form.Item>

              <Form.Item required label="성별">
                <Input
                  id="gender"
                  placeholder="본인의 성을 선택해주세요."
                  type="text"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.gender && touched.gender
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.gender && touched.gender ? (
                  <div className="input-feedback">{errors.gender}</div>
                ) : (
                  <div className="input-feedback"></div>
                )}
              </Form.Item>

              <Form.Item required label="연락처">
                <Input
                  id="phone"
                  placeholder="연락처를 입력해주세요."
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.phone && touched.phone
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.phone && touched.phone ? (
                  <div className="input-feedback">{errors.phone}</div>
                ) : (
                  <div className="input-feedback"></div>
                )}
              </Form.Item>

              <Form.Item required label="생년월일">
                <Input
                  id="birth"
                  placeholder="생년월일을 입력해주세요."
                  type="text"
                  value={values.birth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.birth && touched.birth
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.birth && touched.birth ? (
                  <div className="input-feedback">{errors.birth}</div>
                ) : (
                  <div className="input-feedback"></div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  onClick={handleSubmit}
                  type="primary"
                  disabled={isSubmitting}
                >
                  가입하기
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default RegisterPage;
