import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = (props) => {
  const handleCloseModal = () => {
    console.log("object :>> close ");
    props.onClose(false);
  };
  return (
    <div id={props.id} className={`modal ${props.isAcive ? "active" : ""}`}>
      <h1> this is modal</h1>
      <div className="modal__content">
        <div
          className="modal__content__close"
          onClick={() => handleCloseModal()}
        >
          <i className="bx bx-x">
            <h1>this is video</h1>
          </i>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);
  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
