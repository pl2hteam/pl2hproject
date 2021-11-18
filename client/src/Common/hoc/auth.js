import React, { useEffect } from "react";
import { auth } from "../_actions/user_actions";
import { useSelector, useDispatch } from "react-redux";

export default function (ComposedClass, reload, homePage, adminRoute = null) {
  function AuthenticationCheck(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    // 추후 DB 의 이미지 경로 유무로 판매자 구분
    console.log(user);
    useEffect(() => {
      if (homePage) { // SNS PAGE
        dispatch(auth(true)).then((response) => {
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
        });
      } else {  // SHOP PAGE
        dispatch(auth(true)).then((response) => {
          if (!response.payload.gender) {
            dispatch(auth(false)).then((response) => {
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
            });
          } else {
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
          }
        });
      }
    }, [dispatch, props.history, user.googleAuth]);

    return <ComposedClass {...props} user={user} />;
  }
  return AuthenticationCheck;
}
