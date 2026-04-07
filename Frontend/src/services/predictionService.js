const API_URL = "http://localhost:5000";

export const predictDisease = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Prediction Error:", error);
    throw error;
  }
};
