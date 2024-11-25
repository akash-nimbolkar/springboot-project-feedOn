import { Box, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCartItems } from "../State/Cart/Action";
import CartItem from "../Cart/CartItem";
import Cart from "../Cart/Cart";

export const Navbar = () => {
   const { auth, cart } = useSelector((store) => store);
   console.log("Cart State:", cart);
   const navigate = useNavigate();

   const handleAvatarClick = () => {
      if (auth.user?.role === "ROLE_CUSTOMER") {
         navigate("/myprofile");
      } else {
         navigate("/admin/restaurant");
      }
   };

   const handleLogoClick = () => {
      console.log("Logo clicked");
      navigate("/");
   };

   //const cartItemCount = cart?.items?.length || 0;

   return (
      <Box className="px-5 sticky top-0 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
         <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
            <div onClick={handleLogoClick} className="logo font-semibold text-gray-300 text-2xl">
               Feed On
            </div>
         </div>

         <div className="flex items-center space-x-2 lg:space-x-10">
            <div>
               <IconButton>
                  <SearchIcon sx={{ fontSize: "1.5rem" }} />
               </IconButton>
            </div>
            <div>
               {auth.user ? (
                  <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: 'pink.A400' }}>
                     {auth.user.fullName[0].toUpperCase()}
                  </Avatar>
               ) : (
                  <IconButton onClick={() => navigate("/account/login")}>
                     <Person />
                  </IconButton>
               )}
            </div>
            <div>
               <IconButton onClick={() => navigate("/cart")}>
                  <Badge color="primary" badgeContent={cart.cart?.item?.length}>
                     <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                  </Badge>
               </IconButton>
            </div>
         </div>
      </Box>
   );
};
