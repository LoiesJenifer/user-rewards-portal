import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RewardList from '../components/RewardList';




const Dashboard = () => {
  const [rewards, setRewards] = useState([]);
  const [totalRewards, setTotalRewards] = useState(0);


  useEffect(() => {
    axios.get('https://mocki.io/v1/68f88502-a805-4d24-a407-ee2a232a5c60')
      .then(response => {
        const rewardsData = response.data;
        setRewards(rewardsData);
        setTotalRewards(rewardsData.reduce((total, reward) => total + reward.rewardPoints, 0));
      });
  }, []);


  return (
    <div className="mt-4">
     <h1 className="text-2xl font-bold mb-4">Total Rewards: {totalRewards}</h1>
    <RewardList rewards={rewards} />
    </div>
  );
};


export default Dashboard;
