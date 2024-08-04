import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RewardList = ({ rewards }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredSortedRewards, setFilteredSortedRewards] = useState(rewards);

  useEffect(() => {
    const filterAndSortRewards = () => {
      let updatedRewards = rewards;

      // Filter by search term
      if (searchTerm) {
        updatedRewards = updatedRewards.filter((reward) =>
          reward.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter by date range
      if (startDate || endDate) {
        updatedRewards = updatedRewards.filter((reward) => {
          const rewardDate = new Date(reward.purchaseDate);
          const start = startDate ? new Date(startDate) : new Date('1970-01-01');
          const end = endDate ? new Date(endDate) : new Date();
          return rewardDate >= start && rewardDate <= end;
        });
      }

      // Sort by the specified field
      if (sortField) {
        updatedRewards = [...updatedRewards].sort((a, b) => {
          if (sortField === 'date') {
            return new Date(b.purchaseDate) - new Date(a.purchaseDate);
          } else if (sortField === 'points') {
            return b.rewardPoints - a.rewardPoints;
          }
          return 0;
        });
      }

      setFilteredSortedRewards(updatedRewards);
    };

    filterAndSortRewards();
  }, [searchTerm, sortField, startDate, endDate, rewards]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by brand"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 text-gray-700"
        />
        <button
          onClick={() => setSortField('date')}
          className="bg-blue-500 text-black rounded p-2 hover:bg-blue-600"
        >
          Sort by Date
        </button>
        <button
          onClick={() => setSortField('points')}
          className="bg-blue-500 text-black rounded p-2 hover:bg-blue-600"
        >
          Sort by Points
        </button>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded p-2 text-gray-700"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded p-2 text-gray-700"
        />
      </div>
      <ul className="space-y-4">
        {filteredSortedRewards.map((reward) => (
          <li
            key={reward.id}
            className="border rounded p-4 bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            <Link to={`/reward/${reward.id}`} className="block">
              <div className="font-bold text-xl text-blue-800">{reward.brand}</div>
              <div className="text-sm text-gray-600">{new Date(reward.purchaseDate).toLocaleDateString()}</div>
              <div className="text-lg font-semibold text-green-600">{reward.rewardPoints} pts</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardList;
