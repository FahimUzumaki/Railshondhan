import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Services = () => {
  // st stephen green
  // const lat = 23.7224651;
  // const lon = 90.3998015;
  const zoom = 16; // 15 is ideal

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const accessToken = localStorage.getItem("accessToken");
  const userID = localStorage.getItem("userID");

  const { trainNumber } = useParams();

  useEffect(() => {
    try {
      setIsLoading(true);
      setError(null);
      fetch(
        "https://rail-sondhan-backend.vercel.app/location/estimated/" +
          trainNumber,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Getting location data was not successful");
          } else {
            setIsLoading(false);
            setError(null);
            console.log("Location fetching was successful");
            return res.json();
          }
        })
        .then((data) => {
          // console.log(data);
          setLongitude(data.location.coordinates[0]);
          setLatitude(data.location.coordinates[1]);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <div className="md">
      {isLoading && <p className="text-sm  text-blue-500">Loading...</p>}
      {error && <p className="text-sm font-medium text-red-500">{error}</p>}
      <iframe
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`}
        width="1800px"
        height="800px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google map"
      ></iframe>
    </div>
  );
};

export default Services;
