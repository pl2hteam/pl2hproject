import React from "react";

import LoginPage from "../Login/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

class MainLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "회원가입" : "로그인";
    const currentActive = isLogginActive ? "로그인" : "회원가입";
    return (
      <div className="MainLogin pl2h-main">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            <h1 className="login_page_title">PL2H WORLD</h1>
            {isLogginActive && (
              <LoginPage containerRef={(ref) => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <RegisterPage containerRef={(ref) => (this.current = ref)} />
            )}
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={(ref) => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default MainLogin;
