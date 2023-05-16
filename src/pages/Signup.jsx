import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        "https://rail-sondhan-backend.vercel.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            isVerified: false,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
        setIsLoading(false);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("userID", data.userID);

        window.location.href = "/";
      } else {
        const errorData = await response.json();
        setError(errorData.error.message);
        setIsLoading(false);
        console.log(errorData.error.message);
        console.error("Signup failed:", response.statusText);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen w-screen  lg:py-0">
        <a
          href="valid"
          className="flex items-center text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-48 mt-10"
            src="https://www.linkpicture.com/q/final_logo.png"
            alt="no"
          />
        </a>
        {/* <p>error</p> */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSignup}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-start font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm text-start font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn bg-blue-500 px-5 py-2 rounded text-white w-full"
                >
                  Sign up
                </button>
              </div>
              <p className="text-sm text-center font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline"
                >
                  {" "}
                  log in{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
        {isLoading && <p className="text-sm  text-blue-500">Loading...</p>}
        {error && <p className="text-sm font-medium text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Signup;
