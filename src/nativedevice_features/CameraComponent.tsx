import React, { useState } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const CameraComponent: React.FC = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri,
      });
      setPhoto(image.webPath || null);
    } catch (error) {
      console.error("Camera error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", background: "#222", color: "#fff", borderRadius: "10px" }}>
      <h2>Camera</h2>
      <button onClick={takePhoto}>📸 Take Photo</button>
      {photo && <img src={photo} alt="Captured" style={{ marginTop: "10px", width: "200px", borderRadius: "10px" }} />}
    </div>
  );
};

export default CameraComponent;
