import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Restaurant } from '../types';

type RestaurantListProps = {
    restaurants: Restaurant[];
};

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Price Range</TableCell>
                        <TableCell>Ratings</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurants.map((restaurant) => (
                        <TableRow>
                            <TableCell>{restaurant.name}</TableCell>
                            <TableCell>{restaurant.location}</TableCell>
                            <TableCell>
                                {'$'.repeat(parseInt(restaurant.price_range))}
                            </TableCell>
                            <TableCell>TBD</TableCell>
                            <TableCell>EDIT</TableCell>
                            <TableCell>DELETE</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RestaurantList;
