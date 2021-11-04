import React from "react";

class Join extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
     return 
    // const { location } = this.props;
    // if (location.state) {
    //   return <span>{location.state.title}</span>;
    // } else {
    //   return null;
    // }
  }
}
export default Join;
