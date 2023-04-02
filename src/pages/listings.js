import React from "react";

function Listings({ listings }) {
  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map((listing, index) => (
          <li key={index}>
            Token ID: {listing.tokenId} | Price: {listing.price} ETH
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
