import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="container">
      <h2>URL Shortener</h2>

      <input
        type="text"
        placeholder="Enter a long URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />

      <button onClick={handleShorten}>Shorten</button>

      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
