import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function TrainCard({ name, trainNumber, from, to, departure, arrival }) {
  const [showButtons, setShowButtons] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const userID = localStorage.getItem("userID");

  function handleGetLocationButtonClick() {
    console.log("Get Location button clicked");
    console.log(trainNumber);
  }

  function handleSetLocationButtonClick() {
    console.log("Set Location button clicked");
    console.log(trainNumber);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error(error);
      }
    );

    console.log(latitude);
    console.log(longitude);

    // const { isLoading, error } = usePost(trainNumber, longitude, latitude);
    // setIsLoading(isLoading);
    // setError(error);

    if (!!latitude && !!longitude) {
      setIsLoading(true);
      setError(null);
      fetch("http://localhost:3000/location", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: userID,
          trainNumber: trainNumber,
          location: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("Saving location data is not successful");
          } else {
            setIsLoading(false);
            setError(null);
            console.log("Location saving was successful");
            return res.json();
          }
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    } else {
      setError("Location not provided . Please click again");
    }
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
              <Link to={`/get_location/${trainNumber}`}>
                <button
                  className="px-7 py-3 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 transition-colors duration-150 text-sm"
                  onClick={handleGetLocationButtonClick}
                >
                  Get Location
                </button>
              </Link>
              <button
                className="px-4 py-1 bg-green-500 text-white rounded-md ml-2 hover:bg-green-600 transition-colors duration-150 text-sm"
                onClick={handleSetLocationButtonClick}
              >
                Set Location
              </button>
            </div>
          </div>
        )}
      </Transition>
      {isLoading && <p className="text-sm  text-blue-500">Loading...</p>}
      {error && <p className="text-sm font-medium text-red-500">{error}</p>}
    </div>
  );
}

export default TrainCard;
