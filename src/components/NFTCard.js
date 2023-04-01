import React from 'react';

function NFTCard({ nft }) {
  return (
    <div className="nft-card">
      <img src={nft.image} alt={nft.name} />
      <h2>{nft.name}</h2>
      <p>{nft.description}</p>
      <button>Buy</button>
    </div>
  );
}

export default NFTCard;
