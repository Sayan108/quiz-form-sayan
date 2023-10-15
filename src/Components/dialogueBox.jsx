import React from "react";

const Modal = ({ isOpen, onClose, isBogola }) => {
  return isOpen ? (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div
            className="modal-body"
            style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
          >
            {isBogola ? (
              <img
                src="assets/images/bogolar_bongodorshan.jpg"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ) : (
              <img
                src="assets/images/open-General.jpg"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>
          <div className="modal-footer">
            <button
              onClick={onClose}
              style={{
                padding: "10px",
                background: "#f3f3f3",
                border: "1px solid #ccc",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;
