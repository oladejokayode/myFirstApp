import React, { useContext } from "react";
import { UserContext } from "./UserContext"; // ✅ Ensure correct import
import * as UserContextModule from "./UserContext";
console.log("UserContextModule:", UserContextModule);

const UserProfileDetails: React.FC = () => {
  const context = useContext(UserContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { user } = context;

  return (
    <div>
      <h3>More User Details</h3>
      <p>👤 <strong>Name:</strong> {user.name}</p>
      <p>🎂 <strong>Age:</strong> {user.age}</p>
    </div>
  );
};

export default UserProfileDetails;
