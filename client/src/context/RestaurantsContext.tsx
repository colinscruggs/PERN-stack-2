import React, {
    useState,
    createContext,
    Dispatch,
    SetStateAction,
} from 'react';
import { Restaurant } from '../types';

type RestaurantContextType = {
    restaurants: Restaurant[];
    setRestaurants: Dispatch<SetStateAction<Restaurant[]>>;
};

export const RestaurantsContext = createContext<RestaurantContextType>({
    restaurants: [],
    setRestaurants: () => {},
});

export const RestaurantsContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                setRestaurants,
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};
