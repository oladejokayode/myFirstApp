import React from "react";
import { useUserContext } from "./UserContext"; // ✅ Import correctly

const UserProfile: React.FC = () => {
  const { user, setUser } = useUserContext(); // ✅ Use the custom hook

  const updateUser = () => {
    setUser({ name: "Kayfort", age: 25 });
  };

  return (
    <div>
      <h3>User Profile</h3>
      <p>👤 <strong>Name:</strong> {user.name}</p>
      <p>🎂 <strong>Age:</strong> {user.age}</p>
      <button onClick={updateUser}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
