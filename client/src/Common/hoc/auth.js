import React, { useEffect } from "react";
import { auth } from "../_actions/user_actions";
import { useSelector, useDispatch } from "react-redux";

export default function (ComposedClass, reload, database, adminRoute = null) {
  function AuthenticationCheck(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    // 추후 DB 의 이미지 경로 유무로 판매자 구분
    console.log(user);
    useEffect(() => {
      dispatch(auth(database)).then((response) => {
        if (database) { // SNS
          console.log(response);
          if (!response.payload.isAuth) {
            if (reload) {
              props.history.push("/sns");
            }
          } else {
            if (adminRoute && !response.payload.isAdmin) {
              props.history.push("/sns/admin");
            } else {
              if (reload === false) {
                props.history.push("/sns/main");
              }
            }
          }
        } else {  // SHOP
          if (!response.payload.isAuth) {
            if (reload) {
              props.history.push("/shop");
            }
          } else {
            if (adminRoute && !response.payload.isAdmin) {
              props.history.push("/shop/admin");
            } else {
              if (reload === false) {
                props.history.push("/shop/main");
              }
            }
          }
        }
      });
    }, [dispatch, props.history, user.googleAuth]);

    return <ComposedClass {...props} user={user} />;
  }
  return AuthenticationCheck;
}
