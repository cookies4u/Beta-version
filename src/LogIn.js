import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const style = {
  margin: 12,
};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
//Lots of good stuff happening here
export default class LogIn extends Component  {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "blue";
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <RaisedButton onClick={this.openModal} label="LogIn" secondary={true} style={style} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Please Log In</h2>
          <div>Username</div>
          <form>
            <input />
          <div>Password</div>
            <input />
          <div></div>
            <button>Log In</button>
          <div></div>
            <button>Forgot Password</button>
          <div></div>
            <button>Register</button>
          </form>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}
