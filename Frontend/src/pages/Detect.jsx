import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { predictDisease } from "../services/predictionService";
import { useNavigate } from "react-router";

const Detect = () => {
  const [prediction, setPrediction] = useState(null);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleClear = () => {
    setFile(null);
    setPreview(null);
  };

  const handleDetect = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const result = await predictDisease(file);

      console.log(result);

      navigate("/output", { state: result });
    } catch (error) {
      console.error("Prediction failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Navbar />

      <div className="main-container w-full h-full mt-30 px-20 flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-bold">Detect Rice Leaf Disease</h1>
          <p className="text-gray-500">
            Upload a high-quality image of the rice leaf to receive an instant
            AI diagnosis.
          </p>
        </div>

        <div className="w-full min-h-100 flex flex-col gap-4 justify-center items-center bg-light border-2 border-dashed rounded-3xl p-10">
          {!preview && (
            <>
              <svg
                className="text-gray-400 bg-white p-2 rounded-full"
                width={60}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 20.9811C3.64378 20.7257 1 17.9216 1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811V21H7V20.9811ZM13 13H16L12 8L8 13H11V17H13V13Z"></path>
              </svg>

              <p className="font-bold text-xl">Drag & Drop your image here</p>
              <p className="text-gray-400">JPEG, PNG or WEBP (Max 10MB)</p>
            </>
          )}

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="h-60 object-cover rounded-xl"
            />
          )}

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {!preview && (
            <button
              onClick={handleChooseFile}
              className="bg-primary mt-5  cursor-pointer text-white py-3 px-6 rounded-lg"
            >
              Choose File
            </button>
          )}

          {preview && (
            <div className="flex gap-4 mt-5">
              <button
                onClick={handleClear}
                className="px-6 py-3 rounded-lg border cursor-pointer border-gray-400 text-gray-600 hover:bg-gray-100"
              >
                Clear
              </button>

              <button
                onClick={handleDetect}
                disabled={loading}
                className="px-6 py-3 cursor-pointer rounded-lg bg-primary text-white"
              >
                {loading ? "Analyzing..." : "Detect Disease"}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Detect;
