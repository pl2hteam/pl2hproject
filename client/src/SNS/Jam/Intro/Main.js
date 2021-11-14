import React, { Component } from 'react';
import MyModal from './MyModal';
import ModalPortal from './ModalPortal';


class Main extends Component {
  state = {
    modal: false
  };
  handleOpenModal = () => {
    this.setState({
      modal: true
    });
  };
  handleCloseModal = () => {
    this.setState({
      modal: false
    });
  };
  render() {
    return (
     
      <div className="App">
        <h1>안녕하세요 리액트!</h1>
        <button onClick={this.handleOpenModal}>모달 열기</button>
        {this.state.modal && (
          <ModalPortal>
            <MyModal onClose={this.handleCloseModal} />
          </ModalPortal>
        )}
      </div>
    );
  }
}

export default Main;