import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const {text} = props;

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
    
  }

  

  return (
    <div>
      <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler} >DELETE</button>
        </div>
      </div>
      {modalIsOpen ? <Modal onCancel={closeModalHandler} /> : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
};
export default Todo;
