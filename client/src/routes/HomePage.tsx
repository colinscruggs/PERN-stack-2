import { useEffect, useState } from 'react';
import { RestaurantAPI } from '../api/RestaurantApi';
import RestaurantList from '../components/RestaurantList';

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await RestaurantAPI.getAll();
                setRestaurants(response);
            } catch (err) {
                console.error((err as Error).message);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <>
            <RestaurantList restaurants={restaurants} />
        </>
    );
};

export default HomePage;
