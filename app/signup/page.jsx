import { FaFacebookF, FaLinkedin, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline} from "react-icons/md";
export default function signup(){
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-teal-500">Ibirds Software</span> Services
          </div>

          {/* Signup content */}
          <div className="py-10">
            <h2 className="text-2xl font-bold text-teal-500 mb-2">
              Sign Up to EMS
            </h2>
            <div className="border-2 w-10 border-teal-500 inline-block m-2"></div>

            <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                ></input>
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter Phone"
                  className="bg-gray-100 outline-none text-sm flex-1"
                ></input>
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                ></input>
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                ></input>
              </div>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1"
                  ></input>{" "}
                  Remember Me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password
                </a>
              </div>
              <a
                href="#"
                className="border-2 border-teal-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-teal-500 hover:text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/5 p-5 bg-teal-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-2xl font-bold mb-2">Sign In section </h2>
          <div className="border-2 w-10 border-white inline-block m-2"></div>
          <p className="mb-10">
            Let`s grab it
          </p>
          <a
            href="/"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-teal-500"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};
