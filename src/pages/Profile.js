import React from "react";

function Profile({ address, balance }) {
  return (
    <div>
      <h1>My Profile</h1>
      <p>Address: {address}</p>
      <p>Balance: {balance} ETH</p>
    </div>
  );
}

export default Profile;
