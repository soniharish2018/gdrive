import React, { useState } from "react";

function App() {
  const [videoLink, setVideoLink] = useState("");
  const [videoSrc, setVideoSrc] = useState("");

  const extractFileId = (link) => {
    const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
    const match = link.match(regex);
    return match ? match[1] : null;
  };

  const handleInputChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handlePlayVideo = () => {
    const fileId = extractFileId(videoLink);
    if (fileId) {
      setVideoSrc(`https://drive.google.com/file/d/${fileId}/preview`);
    } else {
      alert("Invalid Google Drive link.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Google Drive Video Player</h2>
      <input
        type="text"
        value={videoLink}
        onChange={handleInputChange}
        placeholder="Paste Google Drive share link here"
        style={{ width: "70%", padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handlePlayVideo}
        style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}
      >
        Play Video
      </button>

      {videoSrc && (
        <div style={{ marginTop: "20px" }}>
          <iframe
            src={videoSrc}
            width="640"
            height="360"
            allow="autoplay"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
