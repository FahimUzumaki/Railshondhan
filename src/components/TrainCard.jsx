import { useState } from "react";
import { Transition } from "@headlessui/react";

function TrainCard({ name, trainNumber, from, to, departure, arrival }) {
  const [showButtons, setShowButtons] = useState(false);

  function handleGetLocationButtonClick() {
    console.log("Get Location button clicked");
  }

  function handleGiveLocationButtonClick() {
    console.log("Give Location button clicked");
  }

  return (
    <div className="bg-white shadow rounded-lg mb-4">
      <div className="p-4 flex justify-between items-center">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{trainNumber}</p>
        </div>
        <button
          className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
          onClick={() => setShowButtons(!showButtons)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down w-5 h-5"
          >
            {showButtons ? (
              <polyline points="6 9 12 15 18 9" />
            ) : (
              <polyline points="18 15 12 9 6 15" />
            )}
          </svg>
        </button>
      </div>
      <Transition
        show={showButtons}
        enter="transition duration-150 ease-out"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div className="p-4 bg-gray-50" ref={ref}>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">From:</p>
              <p>{from}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">To:</p>
              <p>{to}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Departure:</p>
              <p>{departure}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Arrival:</p>
              <p>{arrival}</p>
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 transition-colors duration-150"
                onClick={handleGetLocationButtonClick}
              >
                Get Location
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-150"
                onClick={handleGiveLocationButtonClick}
              >
                Give Location
              </button>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default TrainCard;
