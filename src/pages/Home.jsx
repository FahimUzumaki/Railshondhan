// import React from "react";

const Home = () => {
  // const Background =
  //   "https://images.pexels.com/photos/253647/pexels-photo-253647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div
      className="m"
      style={{
        backgroundImage: "url(/images/home.jpg)",
        backgroundSize: "cover",
        width: "1600px",
        height: "960px",
      }}
    >
      <div className="flex flex-col items-center mt-18 px-6 py-8 mx-auto  lg:py-0">
        <div className="mt-24"></div>
      </div>
    </div>
  );
};

export default Home;
