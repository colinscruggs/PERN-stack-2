const RestaurantList = (props: any) => {
    const { restaurants } = props;

    return (
        <div>
            <ul>
                {restaurants.map((r: any, i: number) => (
                    <li key={r.name + i}>{r.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantList;
