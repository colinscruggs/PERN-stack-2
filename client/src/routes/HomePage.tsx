import { useContext, useEffect } from 'react';
import { RestaurantsAPI } from '../api/RestaurantsApi';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantList from '../components/RestaurantList';

const HomePage = () => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await RestaurantsAPI.getAll();
                setRestaurants(response);
            } catch (err) {
                console.error((err as Error).message);
            }
        };

        fetchRestaurants();
    }, [setRestaurants]);

    return (
        <>
            {/* TODO: add AddRestaurant component */}
            <RestaurantList restaurants={restaurants} />
        </>
    );
};

export default HomePage;
