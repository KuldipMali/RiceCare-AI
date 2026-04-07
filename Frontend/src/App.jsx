import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className="main-container w-full bg-background px-20">
          <div className="hero-section mt-45 h-[70%] w-full flex items-center">
            <div className="left flex flex-col gap-4">
              <h1 className="font-extrabold text-7xl">
                AI Powered <br />{" "}
                <span className="text-secondary">Rice Leaf</span> Disease <br />
                Detection
              </h1>
              <p className="text-xl w-[80%] text-darkblack">
                Protect your harvest with the power of modern technology. Upload
                a rice leaf image and detect diseases instantly using advanced
                machine learning models trained on global datasets.
              </p>
              <div className="flex gap-6">
                <Link to="/detect" >
                  <button className="bg-primary cursor-pointer w-fit px-6 py-3 shadow-secondary rounded-[10px] flex items-center gap-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path>
                    </svg>{" "}
                    Upload Leaf Image
                  </button>
                </Link>
                <Link to="/about">
                  <button className="border border-primary bg-light cursor-pointer w-fit px-6 py-3 rounded-[10px] text-primary">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="right relative w-full h-full flex items-center justify-center">
              <div className="absolute w-40 h-25 rounded-2xl flex justify-center items-center flex-col bg-white -top-10 -right-10 shadow-2xl">
                <h2 className="text-3xl font-extrabold text-primary">94.6%</h2>
                <p className="text-gray-600 text-xs text-center">
                  AI CONFIDENCE
                </p>
              </div>
              <div className="absolute w-50 h-15 font-bold rounded-2xl flex justify-center items-center flex-col bg-white -bottom-5 -left-15 shadow-2xl">
                <p className=" text-xs">🟢 Diagnopsis: Healthy Leaf</p>
              </div>
              <div className="img w-150 h-120 overflow-hidden border-8 border-light shadow-2xl rounded-3xl bg-amber-200">
                <img
                  className="object-cover h-full w-full"
                  src="https://i.pinimg.com/1200x/66/ba/f3/66baf3cb46a2cc20fc85d1980c58a38f.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="feature-section text-white w-full h-50 bg-primary mt-30 rounded-3xl flex justify-evenly items-center">
            <div className="flex flex-col items-center">
              <h2 className="font-extrabold text-6xl">4+</h2>
              <p>DISEASES IDENTIFIED</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-extrabold text-6xl">10+</h2>
              <p>FARMERS SUPPORTED</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-extrabold text-6xl">95%</h2>
              <p>DETECTION ACCURACY</p>
            </div>
          </div>

          <div className="third-section w-full h-80 flex items-center justify-center flex-col text-center gap-5">
            <h2 className="text-5xl text-darkblack font-extrabold">
              Why choose RiceCare AI?
            </h2>
            <p className="text-lg text-gray-600">
              Our platform combines state-of-the-art computer vision with
              agricultural <br /> expertise to provide actionable insights for
              your farm.
            </p>
          </div>

          <div className="fifth-section flex justify-center items-center w-full h-100">
            <div className="cards flex gap-8 w-full h-120 items-center justify-center">
              <div className="first w-70 h-80 rounded-xl shadow-xl flex flex-col justify-center gap-4 px-8 py-4">
                <svg
                  className="text-primary bg-green-200 p-1 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                >
                  <path d="M3.52561 3.5254C4.89246 2.15872 7.10805 2.15861 8.47483 3.5254L8.64671 3.6963C8.84198 3.89145 9.15851 3.89152 9.35374 3.6963L9.52561 3.5254C10.8082 2.24294 12.8376 2.16412 14.2131 3.28809L12.9475 4.83594C12.3592 4.35525 11.4888 4.39054 10.9397 4.93946L10.7678 5.11133C9.7916 6.08721 8.20889 6.08713 7.23265 5.11133L7.06077 4.93946C6.47504 4.35373 5.52548 4.35383 4.93968 4.93946C4.35389 5.52525 4.35389 6.47477 4.93968 7.06055L5.11155 7.23243C6.0873 8.20862 6.08727 9.79137 5.11155 10.7676L4.93968 10.9395C4.35389 11.5252 4.35389 12.4748 4.93968 13.0606L5.11155 13.2324C6.0873 14.2086 6.08727 15.7914 5.11155 16.7676L4.93968 16.9395C4.35389 17.5252 4.35389 18.4748 4.93968 19.0606C5.52547 19.6462 6.47502 19.6463 7.06077 19.0606L7.23265 18.8887C8.20889 17.9129 9.79162 17.9128 10.7678 18.8887L10.9397 19.0606C11.5255 19.6462 12.475 19.6463 13.0608 19.0606L13.2326 18.8887C14.2089 17.9129 15.7916 17.9128 16.7678 18.8887L16.9397 19.0606C17.5255 19.6462 18.475 19.6463 19.0608 19.0606C19.6464 18.4748 19.6464 17.5252 19.0608 16.9395L18.8889 16.7676C17.913 15.7914 17.913 14.2087 18.8889 13.2324L19.0608 13.0606C19.6097 12.5115 19.6449 11.641 19.1643 11.0527L20.7121 9.78712C21.836 11.1626 21.7573 13.192 20.4748 14.4746L20.3039 14.6465C20.1087 14.8418 20.1087 15.1583 20.3039 15.3535L20.4748 15.5254C21.8415 16.8922 21.8415 19.1078 20.4748 20.4746C19.108 21.8414 16.8925 21.8413 15.5256 20.4746L15.3537 20.3037C15.1585 20.1085 14.842 20.1086 14.6467 20.3037L14.4748 20.4746C13.108 21.8414 10.8925 21.8413 9.52561 20.4746L9.35374 20.3037C9.15853 20.1085 8.84198 20.1086 8.64671 20.3037L8.47483 20.4746C7.10803 21.8414 4.89246 21.8413 3.52561 20.4746C2.15878 19.1078 2.15878 16.8922 3.52561 15.5254L3.69651 15.3535C3.89158 15.1583 3.89161 14.8417 3.69651 14.6465L3.52561 14.4746C2.15878 13.1078 2.15878 10.8922 3.52561 9.5254L3.69651 9.35352C3.89158 9.15828 3.89161 8.84171 3.69651 8.64649L3.52561 8.47462C2.15878 7.10778 2.15878 4.89223 3.52561 3.5254ZM14.5002 7.50001C15.6047 7.50015 16.5002 8.39555 16.5002 9.50001V14.5C16.5002 15.6045 15.6047 16.4999 14.5002 16.5H9.50022C8.39565 16.5 7.50022 15.6046 7.50022 14.5V9.50001C7.50025 8.39546 8.39567 7.50001 9.50022 7.50001H14.5002ZM9.50022 14.5H14.5002V9.50001H9.50022V14.5ZM18.5295 1.31934C18.7062 0.89362 19.2945 0.893484 19.4709 1.31934L19.7239 1.93067C20.1558 2.97354 20.9617 3.8062 21.9748 4.25684L22.6916 4.57618C23.1024 4.75887 23.1024 5.35638 22.6916 5.53907L21.9319 5.87696C20.9442 6.3163 20.1526 7.11944 19.7131 8.12794L19.467 8.69337C19.2866 9.1075 18.7139 9.1075 18.5334 8.69337L18.2864 8.12794C17.8468 7.11943 17.0553 6.31625 16.0676 5.87696L15.3078 5.53907C14.8974 5.35629 14.8973 4.7589 15.3078 4.57618L16.0256 4.25684C17.0386 3.80616 17.8438 2.9734 18.2756 1.93067L18.5295 1.31934Z"></path>
                </svg>
                <h2 className="font-bold  text-2xl">AI Disease Detection</h2>
                <p className="text-sm text-gray-600">
                  Advanced neural networks identify, Blast, Bacterial Blight,
                  Brown Spot, and more with high precision
                </p>
              </div>

              <div className="second w-70 h-80 rounded-xl shadow-xl flex flex-col justify-center gap-4 px-8 py-4">
                <svg
                  className="text-primary bg-green-200 p-1 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
                </svg>
                <h2 className="font-bold  text-2xl">
                  Instant Results Under Seconds
                </h2>
                <p className="text-sm text-gray-600">
                  No more waiting for lab results. Get a comprehensive dagnosis
                  in under 5 seconds directly on you field.
                </p>
              </div>

              <div className="third w-70 h-80 rounded-xl shadow-xl flex flex-col justify-center gap-4 px-8 py-4">
                <svg
                  className="text-primary bg-green-200 p-1 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.9994 2V4H14.9994V7.24291C14.9994 8.40051 15.2506 9.54432 15.7357 10.5954L20.017 19.8714C20.3641 20.6236 20.0358 21.5148 19.2836 21.8619C19.0865 21.9529 18.8721 22 18.655 22H5.34375C4.51532 22 3.84375 21.3284 3.84375 20.5C3.84375 20.2829 3.89085 20.0685 3.98181 19.8714L8.26306 10.5954C8.74816 9.54432 8.99939 8.40051 8.99939 7.24291V4H7.99939V2H15.9994ZM12.9994 4H10.9994V8H12.9994V4Z"></path>
                </svg>
                <h2 className="font-bold  text-2xl">Get Treatment Tips</h2>
                <p className="text-sm text-gray-600">
                  Get detailed organic and chemical solution recommendation
                  based on the detected disease stage
                </p>
              </div>

              <div className="fourth w-70 h-80 rounded-xl shadow-xl flex flex-col justify-center gap-4 px-8 py-4">
                <svg
                  className="text-primary bg-green-200 p-1 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"></path>
                </svg>
                <h2 className="font-bold  text-2xl">Farmer Friendly To Use</h2>
                <p className="text-sm text-gray-600">
                  Simple, intuitive interface designed for farmers of all tech
                  levels, with multilingual support and offline capabilities for
                  remote areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
