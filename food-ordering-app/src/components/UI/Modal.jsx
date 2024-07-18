import { React, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children, open, classname = "" }) => {
  const modal = useRef();

  useEffect(() => {
    if (open) {
      modal.current.showModal();
    }
  }, [open]);

  return createPortal(
    <dialog ref={modal} className={`modal ${classname}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
