import { api, API_URL } from "../../config/api";
import { CREATE_MENU_ITEM_FAILURE, 
	CREATE_MENU_ITEM_REQUEST, 
	CREATE_MENU_ITEM_SUCCESS, 
	DELETE_MENU_ITEM_FAILURE, 
	DELETE_MENU_ITEM_REQUEST, 
	DELETE_MENU_ITEM_SUCCESS, 
	GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, 
	GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, 
	GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, 
	SEARCH_MENU_ITEM_FAILURE, 
	SEARCH_MENU_ITEM_REQUEST, 
	SEARCH_MENU_ITEM_SUCCESS, 
	UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, 
	UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, 
	UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType";


export const createMenuItem = ({menu,jwt}) =>{
	
	return  async (dispatch)=>{
		dispatch({type:CREATE_MENU_ITEM_REQUEST});
		try {
			const {data}=await api.post(`/api/admin/food`,menu,{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			});

            console.log("created menu ",data)
			dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});	
			
		} catch (error) {
			console.log("catch error ",error)
			dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
		}
	};
};
export const getMenuItemsRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });

        // Debug logs
        console.log("Request Data (before validation): ", reqData);
        console.log("restaurantId (before validation): ", reqData.restaurantId);

        try {
            // Updated condition
            if (!reqData || typeof reqData.restaurantId === 'undefined' || reqData.restaurantId === '') {
                throw new Error("Invalid request data: restaurantId is missing or empty");
            }

            const { data } = await api.get(
                `/api/food/restaurant/${reqData.restaurantId}?vegeterian=${reqData.vegeterian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory || ''}`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                }
            );

            console.log("Menu item by restaurant", data);
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });

        } catch (error) {
            console.log("catch error ", error);
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
        }
    };
};


export const searchMenuItem = ({keyword,jwt}) =>{
	return  async (dispatch)=>{
		dispatch({type:SEARCH_MENU_ITEM_REQUEST});
		try {
			const {data}=await api.get(`/api/food/search?name=${keyword}`,{
				headers: {
					Authorization: `Bearer ${jwt}`,

				},
			});
            console.log("Data---------",data)
			dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
			
		} catch (error) {
			console.log("catch error ",error)
			dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error});
		}
	};
};

// export const getAllIngredientsOfMenuItem = ({reqData}) =>{
// 	return  async (dispatch)=>{
// 		dispatch({type:GET_in});
// 		try {
// 			const {data}=await api.get(`/api/food/restaurant/${reqData.restaurantId}`,{
// 				headers: {
// 					Authorization: `Bearer ${reqData.jwt}`,
// 				},
// 			});
// 			console.log("Menu item by restaurants ",data);
// 			dispatch({type:GET_ALL_EVENTS_SUCCESS,payload:res.data});
			
// 		} catch (error) {
// 			console.log("catch error ",error)
// 			dispatch({type:GET_ALL_EVENTS_FAILURE,payload:error});
// 		}
// 	};
// };


export const updateMenuItemsAvaialability = ({foodId,jwt}) =>{
	return  async (dispatch)=>{
		dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
		try {
			const {data}=await api.put(`/api/admin/food/${foodId}`,
                {},{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			});
            console.log("Upadte menu item availability",data)
			dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data});
			
		} catch (error) {
			console.log("catch error ",error)
			dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,payload:error});
		}
	};
};

export const deleteFoodAction = ({foodId,jwt}) =>{
	return  async (dispatch)=>{
		dispatch({type:DELETE_MENU_ITEM_REQUEST});
		try {
			const {data}=await api.put(`/api/admin/food/${foodId}`,
                {},{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			});
            console.log("delete food",data)
			dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:foodId});
			
		} catch (error) {
			console.log("catch error ",error)
			dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error});
		}
	};
};