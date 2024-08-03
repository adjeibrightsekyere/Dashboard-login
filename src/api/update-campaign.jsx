
import React, { useState } from 'react';
import { getCampaignById } from './api';

const Campaign = () => {
  const [campaignId, setCampaignId] = useState('');
  const [campaignData, setCampaignData] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(''); 

  const handleFetch = async () => {
    try {
      const data = await getCampaignById(campaignId, token);
      setCampaignData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCampaignData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={campaignId}
        onChange={(e) => setCampaignId(e.target.value)}
        placeholder="Campaign ID"
      />
      <button onClick={handleFetch}>Fetch Campaign</button>
      {campaignData && <pre>{JSON.stringify(campaignData, null, 2)}</pre>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Campaign;
