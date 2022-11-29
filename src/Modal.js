import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <p>Rangking</p>
        <table>
          <tr>
            <th>No#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Fandi</td>
            <td>{((correct / questions.length) * 100).toFixed(0)}%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Agung</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Alam</td>
            <td>10%</td>
          </tr>
        </table>

        <button className="close-btn" onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;