import { Heading, Grid, GridItem } from "@chakra-ui/react";
import foodList from "../data/foodList";
import Dish from "../components/Dish";

const HomeScreen = () => {
    return (
        <>
            <Heading mt="20">Home Screen.</Heading>
            <Grid templateColumns={{ base:'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg:'repeat(5, 1fr)' }} gap={6} m="5">
                {foodList.map(dish => (
                    <GridItem><Dish key={dish._id} dish={dish}/></GridItem>
                ))}
            </Grid>
            
        </>
    )
}

export default HomeScreen;