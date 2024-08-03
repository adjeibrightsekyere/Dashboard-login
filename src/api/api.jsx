
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
