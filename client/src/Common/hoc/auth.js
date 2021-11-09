import React, { useEffect } from "react";
import { auth } from "../_actions/user_actions";
import { useSelector, useDispatch } from "react-redux";

export default function (ComposedClass, reload, database, adminRoute = null) {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth(database)).then((response) => { // MySQL
        if (database) {
          if (!response.payload.isAuth) {
            if (reload) {
              props.history.push("/");
            }
          } else {
            if (adminRoute && !response.payload.isAdmin) {
              props.history.push("/sns/admin");
            } else {
              if (reload === false) {
                props.history.push("/sns");
              }
            }
          }
        } else {  // 몽고DB
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
