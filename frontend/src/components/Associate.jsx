import React, { useContext, useState } from "react";
import { AssociateContext } from "../context/associateContext";
import AssociateForm from "./AssociateForm";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Associate = () => {
  const { associate, deleteAssociate } = useContext(AssociateContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [selected, setSelected] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal1() {
    setIsOpen1(true);
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  function handleDelete(id) {
    deleteAssociate(id);
  }

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(255, 255, 255, 0.50)",
      zIndex: 99999999,
    },
    content: {
      top: 150,
      left: 150,
      right: 150,
      bottom: 150,
      background: "#1F2937",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur(8.5px)",
      WebkitBackdropFilter: "blur( 8.5px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  };
  return (
    <div className="p-8">
      <Link
        to="/"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Back
      </Link>
      <div className="w-full flex justify-end">
        <button
          onClick={openModal}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Add New
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {associate &&
          associate.map((spec) => (
            <div
              key={spec.id}
              className="max-w-md bg-slate-800 text-white rounded overflow-hidden shadow-lg"
            >
              <div className="w-full flex flex-row gap-2 justify-end p-1">
                <svg
                  onClick={() => {
                    setSelected(spec);
                    openModal1();
                  }}
                  className="w-6 h-6 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>

                <svg
                  onClick={() => {
                    if (window.confirm("Delete the item?")) {
                      handleDelete(spec.id);
                    }
                  }}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-full px-6 py-4">
                <div className="font-bold text-xl mb-2">{spec.name}</div>
              </div>
              <div className="w-full px-6 py-2">
                <div className="font-bold text-xl mb-2">{spec.phone}</div>
              </div>
              <div className="w-full px-6 py-2">
                <div className="font-bold text-xl mb-2">{spec.address}</div>
              </div>
              <div className="w-full py-4 grid grid-cols-2 gap-1">
                {spec.specials &&
                  spec.specials.map((skill) => (
                    <div class="w-24 ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-4 py-1 rounded-full bg-white text-gray-700 border">
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="w-full flex justify-end">
          <button className="text-white" onClick={closeModal}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <AssociateForm data={""} type={"new"} close={closeModal} />
      </Modal>

      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
      >
        <div className="w-full flex justify-end">
          <button className="text-white" onClick={closeModal1}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <AssociateForm data={selected} type={"update"} close={closeModal1} />
      </Modal>
    </div>
  );
};

export default Associate;
