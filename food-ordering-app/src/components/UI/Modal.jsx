import { React, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children, open, classname = "" }) => {
  const modal = useRef();

  useEffect(() => {
    const modal1 = modal.current;
    if (open) {
      modal1.showModal();
    }

    return () => modal1.close();
  }, [open]);

  return createPortal(
    <dialog ref={modal} className={`modal ${classname}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
