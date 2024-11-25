import React from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToFavorite } from '../State/Authentication/Action';
import { isPresentInFavorites } from '../config/favoritesUtils';

const RestaurantCard = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");

    // Optimize selector to only get what you need
    const favorites = useSelector(state => state.auth.favorites);

    const handleAddToFavorite = () => {
        dispatch(addToFavorite({ restaurantId: item.id, jwt }));
    };

    const handleNavigateRestaurant = () => {
        if (item.open) {
            navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`);
        }
    };

    return (
        <Card className="w-[18rem]">
            <div className={`${item.open ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover' src={item.images[1]} alt={item.name} />
                <Chip
                    size="small"
                    className="absolute top-2 left-2"
                    color={item.open ? "success" : "error"}
                    label={item.open ? "open" : 'closed'}
                />
            </div>

            <div className='p-4 textPart lg:flex justify-between '>
                <div className='space-y-1'>
                    <p onClick={handleNavigateRestaurant} className='font-semibold text-lg cursor-pointer'>{item.name}</p>
                    <p className="text-gray-500 text-semibold">{item.description}</p>
                </div>

                <div>
                    <IconButton onClick={handleAddToFavorite}>
                        {isPresentInFavorites(favorites, item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default RestaurantCard;












































// import React from 'react';
// import Card from '@mui/material/Card';
// import Chip from '@mui/material/Chip';
// import IconButton from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addToFavorite } from '../State/Authentication/Action';
// import { isPresentInFavorites } from '../config/favoritesUtils';
// const RestaurantCard = ({item}) => {
//     const isClickable = true; // Adjust this condition as needed
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const jwt = localStorage.getItem("jwt")
//     // const{auth}=useSelector(store=>store)
//     const favorites = useSelector(state => state.auth.favorites);


//     const handleAddToFavorite=()=>{
//         dispatch(addToFavorite({restaurantId:item.id,jwt}))
//     }
//     const handleNavigateRestaurant=()=>{
//         if(item.open){
//             navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
//         }
//     }
//     return (
//         <Card className=" w-[18rem]">
//             <div className={`${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
//                 <img className='w-full h-[10rem] rounded-t-md object-cover' src={item.images[1]}  />
//                 <Chip
//                 size="small"
//                 className="absolute top-2 left-2"
//                 color={item.open?"success":"error"}
//                 label={item.open?"open":'closed'}/>
//             </div>
            
//             <div className='p-4 textPart lg:flex justify-between '>
//                 <div className='space-y-1'>
//                     <p onClick={handleNavigateRestaurant} className='font-semibold text-lg cursor-pointer'>{item.name}</p>
//                     <p className="text=gray-500 text-semibold">{item.description}</p>
//                 </div>

//                 <div>
//                     <IconButton onClick={handleAddToFavorite}>
//                         {isPresentInFavorites(auth.favorites,item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
//                     </IconButton>
//                 </div>
//             </div>
//         </Card>
        
//     );
// };

// export default RestaurantCard;
