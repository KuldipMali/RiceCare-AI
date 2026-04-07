import { Link, useLocation } from "react-router";

const Output = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">No prediction data available.</p>
      </div>
    );
  }

  const confidencePercent = (data.confidence * 100).toFixed(1);

  const diseaseInfo = {
  "Brown Spot": {
    description:
      "Brown spot is a fungal disease that infects rice leaves and reduces crop yield if untreated. It appears as circular to oval brown lesions with a gray center on leaves.",

    treatments: [
      "Apply fungicides such as Mancozeb or Propiconazole to control fungal growth.",
      "Use disease-resistant rice varieties whenever possible.",
      "Maintain proper irrigation and avoid water stress in the field.",
      "Ensure balanced fertilization, especially adequate potassium levels.",
      "Remove and destroy infected plant debris after harvest to prevent spread.",
      "Avoid excessive nitrogen fertilizers, which can increase disease severity.",
      "Improve field drainage and airflow between plants.",
      "Regularly monitor crops for early signs of infection.",
    ],
  },

  "Leaf Blast": {
    description:
      "Leaf blast is a serious fungal disease caused by Magnaporthe oryzae. It creates diamond-shaped lesions with gray centers and brown edges on rice leaves and can severely reduce yield.",

    treatments: [
      "Apply recommended fungicides such as Tricyclazole or Isoprothiolane.",
      "Use blast-resistant rice varieties for cultivation.",
      "Maintain proper nitrogen fertilizer levels; avoid excessive nitrogen.",
      "Ensure good field drainage to reduce humidity around plants.",
      "Practice crop rotation to reduce fungal spores in soil.",
      "Remove and destroy infected plant parts to prevent further spread.",
      "Maintain proper spacing between plants to improve air circulation.",
      "Regular field inspection helps detect and control the disease early.",
    ],
  },

  "Healthy Rice Leaf": {
    description:
      "The rice leaf appears healthy with no visible symptoms such as spots, lesions, or discoloration. Proper crop management helps maintain plant health and productivity.",

    treatments: [
      "Maintain proper irrigation and avoid drought or waterlogging.",
      "Use balanced fertilization with nitrogen, phosphorus, and potassium.",
      "Regularly monitor crops for early signs of pests or diseases.",
      "Maintain proper plant spacing for good air circulation.",
      "Remove weeds that may compete for nutrients.",
      "Use high-quality seeds and resistant varieties.",
      "Practice crop rotation and field sanitation.",
      "Apply preventive fungicides only if disease risk is high.",
    ],
  },
};

  const diseaseImages = {
    "Brown Spot":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARj2_587HmoE9KYjK8YQIf6o-XOPYqMB7oA&s",

    "Leaf Blast":
      "https://highyieldsagro.com/wp-content/uploads/2025/06/Paddy-Leaf-Blast-medium.webp",

    "Bacterial Leaf Blight":
      "https://www.knowledgebank.irri.org/images/stories/rice_doctor/diseases/bacterial_leaf_blight_1.jpg",

    "Leaf scald":
      "https://www.knowledgebank.irri.org/images/stories/rice_doctor/diseases/leaf_scald_1.jpg",

    "Sheath Blight":
      "https://www.knowledgebank.irri.org/images/stories/rice_doctor/diseases/sheath_blight_1.jpg",

    "Healthy Rice Leaf":
      "https://cdn-icons-png.flaticon.com/512/2909/2909761.png",
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
            <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
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

          {/* About Condition */}
          <div>
            <h3 className="font-semibold mb-2">About this condition</h3>

            <p className="text-sm text-gray-600 leading-relaxed">
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

              <div className="flex flex-col gap-2 text-sm">
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
            </div>
          )}

          {/* Upload Again */}
          <Link className="w-full" to="/detect">
            <button className="bg-green-600 cursor-pointer w-full text-white py-3 rounded-lg font-semibold hover:bg-green-700">
              Upload Another Image
            </button>
          </Link>

          <p className="text-xs text-gray-400 text-center">
            Always consult with a local agricultural expert for definitive
            diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Output;
