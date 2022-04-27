import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalEl } from '.';

const modalRoot = document.getElementById('modal-root');
export class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    modalAlt: PropTypes.string.isRequired,
    modalImg: PropTypes.string.isRequired,
  };
  state = {};
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onCloseModal();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalEl>
          <img src={this.props.modalImg} alt={this.props.modalAlt} />
        </ModalEl>
      </Overlay>,
      modalRoot
    );
  }
}
