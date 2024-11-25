import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from './MenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Action';
import { getMenuItemsRestaurantById } from '../State/Menu/Action';



const foodTypeOptions = [
    { label: "All", value: "all" },
    { label: "Vegetarian Only", value: "veg" },
    { label: "Non-Vegetarian", value: "nonVeg" },
    { label: "Seasonal", value: "seasonal" }
];

const menu =[1,1,1,1];

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const [category, setCategory] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const{auth,restaurant,menu}=useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")
    const [selectedCategory,setSelectedCategory]=useState("");

    const{id,city}=useParams();
    

    const handleFilter = (e) => {
        setFoodType(e.target.value)
        console.log(e.target.value, e.target.name);
    };

    const handleFilterCategory = (e,value) => {
        setSelectedCategory(value)
        console.log(e.target.value, e.target.name,value);
    };


   
     console.log("restaurant", restaurant);
    //   console.log("id:", id, "jwt:", jwt);

    //   useEffect(() => {
    //     if (id && jwt) {
    //         const reqData = { jwt, restaurantId: id, vegeterian: false, nonveg: false, seasonal: false,foodCategory:""};
    //         dispatch(getRestaurantById(reqData));
    //         dispatch(getRestaurantsCategory(reqData));
    //         dispatch(getMenuItemsRestaurantById(reqData));
    //     } else {
    //         console.error("Missing id or jwt:", { id, jwt });
    //     }
    // }, [id, jwt, dispatch]);
    
    useEffect(()=>{
        dispatch(getRestaurantById({jwt,restaurantId:id}));
        dispatch(getRestaurantsCategory({jwt,restaurantId:id}));
        // dispatch(getMenuItemsRestaurantById({
        //     jwt,
        //     restaurantId:id,
        //     vegeterian:false,
        //     nonveg:false,
        //     seasonal: false,
        //     foodCategory:"",
        // }));
    },[]);

    useEffect(()=>
    {
         dispatch(getMenuItemsRestaurantById({
            jwt,
            restaurantId:id,
            vegeterian:foodType==="Vegetarian Only",
            nonveg:foodType==="Non-Vegetarian",
            seasonal: foodType==="Seasonal",
            foodCategory:selectedCategory,
        }));
    },[selectedCategory,foodType]);

    

    return (
        <div className='px-5 lg:px-20 '>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/India/Namaste India</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover' src={restaurant.restaurant?.images[0]} />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src={restaurant.restaurant?.images[1]} alt="Cafe" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2020/04/17/12/49/barista-5055060_960_720.jpg" alt="Barista" />
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <div className='pt-3 pb-5'>
                        <h1 className='text-4xl font-semibold'>{restaurant.restaurant?.name}</h1>

                        <p className='text-gray-500 mt-1'>
                            {restaurant.restaurant?.description}
                        </p>
                        <div className='space-y-3 mt-3'>
                            <p className='text-gray-500 flex items-center gap-3'>
                                <LocationOnIcon />
                                <span>Pune, Maharashtra</span>
                            </p>
                            <p className='text-gray-500 flex items-center gap-3'>
                                <CalendarTodayIcon />
                                <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter '>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup 
                                onChange={handleFilter}
                                 name='foodType' 
                                 value={foodType}
                                 >
                                    {foodTypeOptions.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                {/* <RadioGroup onChange={handleFilter} name='category' value={category}>
                                    {restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            control={<Radio />}
                                            label={item.name}
                                        />
                                    ))}
                                </RadioGroup> */}
                                <RadioGroup onChange={handleFilterCategory} 
                                name='food_category'
                                 value={selectedCategory}
                                 >
                                    {restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            key={item.id}
                                            value={item.name}
                                            control={<Radio />}
                                            label={item.name}
                                        />
                                    ))}
                                </RadioGroup> 
                                
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.menuItems.map((item)=>
                    <MenuCard item={item}/>)}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetails;
