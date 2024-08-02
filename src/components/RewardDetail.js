// import React from 'react';
// import { useParams } from 'react-router-dom';

// const RewardDetail = ({ rewards }) => {
//   const { id } = useParams();
//   const reward = rewards.find(reward => reward.id === parseInt(id));

//   if (!reward) return <p>Reward not found</p>;

//   return (
//     <div>
//       <h1>Reward Details</h1>
//       <p>Brand: {reward.brand}</p>
//       <p>Purchase Date: {reward.purchaseDate}</p>
//       <p>Reward Points: {reward.rewardPoints}</p>
//     </div>
//   );
// };

// export default RewardDetail;
// src/components/RewardDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RewardDetail = () => {
  const { id } = useParams();
  const [reward, setReward] = useState(null);

  useEffect(() => {
    // Fetch data from mock API
    fetch('https://mocki.io/v1/68f88502-a805-4d24-a407-ee2a232a5c60')
      .then(response => response.json())
      .then(data => {
        const selectedReward = data.find(r => r.id === parseInt(id));
        setReward(selectedReward);
      });
  }, [id]);

  if (!reward) return <p>Loading...</p>;

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
