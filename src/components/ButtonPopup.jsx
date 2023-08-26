import { useState } from "react";
import Modal from "./Modal";

function ButtonPopup() {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="p-20">
      <div className="flex gap-8 items-center mb-10">
        <div className="bg-gray-700 text-white w-16 h-16 rounded-full flex items-center justify-center">
          CK
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-3xl">Charles Kasasira</h1>
          <p className="text-gray-700">Web developer</p>
        </div>
      </div>
      <button
        className="outline outline-1 px-3 py-2 hover:bg-black hover:text-white"
        onClick={() => setPopUp(true)}
      >
        Open Modal
      </button>
      {popUp && <Modal setPopUp={setPopUp} />}
    </div>
  );
}

export default ButtonPopup;
