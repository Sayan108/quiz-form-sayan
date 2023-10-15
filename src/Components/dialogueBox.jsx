import "./dialogue.css";
import React from "react";

const Modal = ({ isOpen, onClose, isBogola }) => {
  return isOpen ? (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            {isBogola ? (
              <img src="assets/images/bogolar_bongodorshan.jpg" />
            ) : (
              <img src="assets/images/open-General.jpg" />
            )}
          </div>
          <div className="modal-footer">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;
