import React, { createContext, useState, useEffect } from 'react';


const RewardContext = createContext();


export const RewardProvider = ({ children }) => {
  const [rewardData, setRewardData] = useState([]);


  useEffect(() => {
    fetch('https://mocki.io/v1/68f88502-a805-4d24-a407-ee2a232a5c60')
      .then(response => response.json())
      .then(data => setRewardData(data));
  }, []);


  return (
    <RewardContext.Provider value={rewardData}>
      {children}
    </RewardContext.Provider>
  );
};


export default RewardContext;


