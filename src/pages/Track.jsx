// import React from "react";
import { useState, useEffect } from "react";

const Track = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [trains, setTrains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const [searchedTrains, setSearchedTrains] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch("http://localhost:3000/train", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Train List fecthing is not successful");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTrains(data);
        console.log(trains);
        setIsLoading(false);
        setError(null);
        setSearchedTrains(data);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  // console.log(trains);

  const updateSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    search(e.target.value);
  };
  const search = () => {
    const matchedTrains = trains.filter((train) =>
      train.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedTrains(matchedTrains);
  };

  return (
    <section className="">
      <div className="flex flex-col items-center mt-24 px-6 py-8 mx-auto md:h-screen w-screen  lg:py-0">
        {/* Search Bar */}

        <div className="w-full">
          <div>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e)}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                onClick={search}
                type="button"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-2">
          {searchedTrains.map((item) => {
            return <li key={item._id}>{item.name}</li>;
          })}
        </div>
        {isLoading && <p className="text-sm  text-blue-500">Loading...</p>}
        {error && <p className="text-sm font-medium text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Track;
