// import React from "react";


const Home = () => {
  const Background =
    "https://images.pexels.com/photos/253647/pexels-photo-253647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div
      className="md:h-screen w-screen"
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center mt-18 px-6 py-8 mx-auto  lg:py-0">
        <div className="mt-24">Boop</div>
      </div>
    </div>
  );
};

export default Home;
