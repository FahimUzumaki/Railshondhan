import React from "react";
import Type from "../components/Type";
// import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Train Tracking</h1>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-md">
            Sign In
          </button>
        </div>
      </header>
      <main className="flex-grow">
        <div className="ml-10 container mx-auto py-8">
          <Type
            text="Welcome to Railsondhan, your one-stop destination for all things related to railways!

Explore our website to discover the latest news and updates about Bangladesh railways. So come on board and let's explore the world of railways together!"
          />
          <div className="mt-20 ml-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-300 rounded-md shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-blue-600">
              <h3 className="text-xl font-bold mb-4">Real-time Tracking</h3>
              <p className="text-black-700">
                Get live updates on train locations and arrival times.
              </p>
            </div>
            <div className="bg-blue-300 rounded-md shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-blue-600">
              <h3 className="text-xl font-bold mb-4">Track Your Routes</h3>
              <p className="text-black-700">
                Save your frequently used routes and get updates on delays.
              </p>
            </div>
            <div className="bg-blue-300 rounded-md shadow-md p-6 transform transition duration-500 hover:scale-105 hover:bg-blue-600">
              <h3 className="text-xl font-bold mb-4">Help Others</h3>
              <p className="text-black-700">
                Update your location frequently to help tracking
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
