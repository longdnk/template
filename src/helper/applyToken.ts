require('dotenv').config();

export const applyToken = (token: string | undefined) => {
    let config = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: '',
        }
    };

    if (token) {
        config = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `${token}`,
            }
        }
    }

    return config;
}