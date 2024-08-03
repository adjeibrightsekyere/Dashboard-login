
export const getCampaignById = async (campaignId, token) => {
    const response = await fetch(`https://test.quups.app/api/campaigns/${campaignId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch campaign');
    }
    return data;
};

export const signin = async (email, password) => {
    const response = await fetch('https://test.quups.app/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to sign in');
    }
    return data;
};
