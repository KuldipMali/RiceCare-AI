import { Link, useLocation } from "react-router";

const Output = () => {
  const location = useLocation();
  const data = location.state;

  // ❌ No data case
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">No prediction data available.</p>
      </div>
    );
  }

  // 🚫 NEW: Handle backend error
  if (data.error) {
    return (
      <div className="flex justify-center items-center h-screen px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-red-500 mb-3">
            Invalid Image
          </h2>
          <p className="text-gray-600 mb-6">{data.error}</p>

          <Link to="/detect">
            <button className="bg-green-600 w-full text-white py-3 rounded-lg font-semibold hover:bg-green-700">
              Upload Rice Leaf Image
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const confidencePercent = (data.confidence * 100).toFixed(1);

  const diseaseInfo = {
    "Brown Spot": {
      description:
        "Brown spot is a fungal disease that infects rice leaves and reduces crop yield if untreated.",
      treatments: [
        "Apply fungicides like Mancozeb.",
        "Use resistant varieties.",
        "Maintain proper irrigation.",
      ],
    },
    "Leaf Blast": {
      description:
        "Leaf blast is caused by fungus and creates diamond-shaped lesions.",
      treatments: [
        "Use Tricyclazole fungicide.",
        "Avoid excess nitrogen.",
        "Ensure proper drainage.",
      ],
    },
    "Healthy Rice Leaf": {
      description: "The leaf is healthy with no disease symptoms.",
      treatments: [
        "Maintain irrigation.",
        "Use balanced fertilizers.",
        "Monitor crops regularly.",
      ],
    },
  };

  const diseaseImages = {
    "Brown Spot":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARj2_587HmoE9KYjK8YQIf6o-XOPYqMB7oA&s",
    "Leaf Blast":
      "https://highyieldsagro.com/wp-content/uploads/2025/06/Paddy-Leaf-Blast-medium.webp",
    "Healthy Rice Leaf":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3X5X8VQPd9dwwHbQTnp3YywPzLnclGM8YEw&s",
  };

  const info = diseaseInfo[data.predicted_class];
  const diseaseImage = diseaseImages[data.predicted_class];

  return (
    <div className="w-full flex justify-center mt-5 px-10">
      <div className="w-162.5 bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white text-center py-6">
          <h1 className="text-2xl font-bold">Analysis Complete</h1>
          <p className="text-sm">RiceCare AI Image Diagnostics</p>
        </div>

        <div className="p-8 flex flex-col gap-6">
          {/* Disease Section */}
          <div className="flex gap-6 items-center">
            <div className="w-28 h-28 bg-gray-100 rounded-lg">
              <img
                src={diseaseImage}
                alt={data.predicted_class}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <p className="text-xs text-gray-500">PREDICTED DISEASE</p>

              <h2 className="text-2xl font-bold">{data.predicted_class}</h2>

              {/* Confidence Bar */}
              <div className="flex items-center gap-4">
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${confidencePercent}%` }}
                  ></div>
                </div>

                <span className="text-green-600 text-sm font-semibold">
                  {confidencePercent}% Confidence
                </span>
              </div>
            </div>
          </div>

          <hr />

          {/* About */}
          <div>
            <h3 className="font-semibold mb-2">About this condition</h3>
            <p className="text-sm text-gray-600">
              {info?.description || "No description available."}
            </p>
          </div>

          {/* Treatment */}
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-green-700 mb-3">
              Suggested Treatment
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-700">
              {info?.treatments?.map((t, index) => (
                <li key={index}>
                  <span className="font-semibold mr-2">{index + 1}.</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Top Predictions */}
          {data.top_k && (
            <div>
              <h3 className="font-semibold mb-2">Top Predictions</h3>
              {data.top_k.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between bg-gray-50 px-3 py-2 rounded"
                >
                  <span>{item.class}</span>
                  <span className="text-green-600 font-semibold">
                    {(item.probability * 100).toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Upload Again */}
          <Link to="/detect">
            <button className="bg-green-600 w-full text-white py-3 rounded-lg font-semibold hover:bg-green-700">
              Upload Another Image
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Output;
