import React, { useState, useRef, useEffect } from "react";
//import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonList, IonItem } from "@ionic/react";
import axios from "axios";

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL; // If using Vite
  const sendMessage = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    setResponse(""); // Clear previous response

    try {
      //const res = await axios.post("http://localhost:5000/chat", { message });
            const res = await axios.post(
        `${API_BASE_URL}/chat`,
        { prompt: message },
        { headers: { "Content-Type": "application/json" } }
      );
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setResponse("Failed to get a response.");
      //setError("Failed to get chatbot response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

// Auto-scroll to the bottom when response updates
useEffect(() => {
    if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
}, [response]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>AI Chatbot</h2>

      {/* Message ibput*/}
      <textarea
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      {/* Message ibput*/}
      <button onClick={sendMessage} disabled={loading} style={{ width: "100%", padding: "8px" }}>
        {loading ? "Loading..." : "Send"}
      </button>

      {/* Chatbot Response */}
    <div
        ref={chatBoxRef}
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          minHeight: "50px",
          maxHeight: "300px", // Limit height to enable scrolling
          overflowY: "auto", // Enable vertical scrolling
          whiteSpace: "pre-line", // Preserve line breaks
          backgroundColor: "black",
        }}
    >
        <strong>Chatbot:</strong> {response || "No response yet."}
      </div>
    </div>
  );
};

export default Chatbot;
