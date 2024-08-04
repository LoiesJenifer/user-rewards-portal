
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RewardContext from '../contexts/RewardContext'; // Import RewardContext

const RewardDetail = () => {
  const { id } = useParams();
  const rewardData = useContext(RewardContext); // Access reward data from context

  // Find the selected reward based on the id from the URL
  const reward = rewardData.find(r => r.id === parseInt(id, 10));

  if (!reward) return <p>Loading...</p>; // Display loading message if reward is not found

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold mb-4">Reward Details</h1>
      <p className="text-lg">Brand: {reward.brand}</p>
      <p className="text-lg">Purchase Date: {reward.purchaseDate}</p>
      <p className="text-lg">Reward Points: {reward.rewardPoints}</p>
    </div>
  );
};

export default RewardDetail;

