import React from "react";
import { useUserContext } from "./UserContext"; // ✅ Import correctly

const UserProfileDetails: React.FC = () => {
  const { user } = useUserContext(); // ✅ Use the custom hook safely

  return (
    <div>
      <h3>More User Details</h3>
      <p>👤 <strong>Name:</strong> {user.name}</p>
      <p>🎂 <strong>Age:</strong> {user.age}</p>
    </div>
  );
};

export default UserProfileDetails;
