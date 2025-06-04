import React from "react";
import { MdClose } from "react-icons/md";

const DeleteModal = ({ setShowModal }) => {
  return (
    <div>
      <div className="fixed inset-0 z-50 p-3 bg-[#00000080] bg-opacity-40 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-[500px] h-[326px] w-full relative">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
          >
            <MdClose size={30} />
          </button>

          {/* Modal Content */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold mb-2 text-center my-3">
             Are you sure you want to delete this property
            </h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-[121px] ">
                Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
