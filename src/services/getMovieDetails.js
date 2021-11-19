import { client } from './client';
export const getMovieById = async query => {
    const params = {
        i: query,
        plot: 'full'
    };
    try {
        const { data } = await client.get('/', { params });
        if (data)
            return data
    } catch (e) {
        console.log(e)
        return [];
    }
};
