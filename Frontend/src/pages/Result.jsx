function Result({ result }) {

  return (
    <div style={{marginTop:"40px"}}>

      <h2>Prediction Result</h2>

      <h3>{result.predicted_class}</h3>

      <p>
        Confidence: {(result.confidence * 100).toFixed(2)}%
      </p>

      <h4>Top Predictions</h4>

      <ul>
        {result.top_k.map((item, index) => (
          <li key={index}>
            {item.class} - {(item.probability * 100).toFixed(2)}%
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Result;