import { api, API_URL } from "../../config/api";
import { GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";



export const updateOrderStatus = ({orderId,orderStatus,jwt}) =>{
	return  async (dispatch)=>{
		
		try {
            dispatch({type:UPDATE_ORDER_STATUS_REQUEST});
			const response=await api.put(`/api/admin/orders/${orderStatus}`,{},{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			});
            const updatedOrder = response.data;
           console.log("updated order ",updatedOrder)
			dispatch({type:UPDATE_ORDER_STATUS_SUCCESS,payload:updatedOrder});
			
		} catch (error) {
			console.log("catch error",error)
			dispatch({type:UPDATE_ORDER_STATUS_FAILURE,payload:error});
		}
	};
};

export const fetchRestaurantsOrder = ({restaurantId,orderStatus,jwt}) =>{
	return  async (dispatch)=>{
		
		try {
            dispatch({type:GET_RESTAURANT_ORDER_REQUEST});
			const response=await api.put(`/api/admin/orders/restaurant/${restaurantId}`,{params:{order_status:orderStatus},
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
            }
			);
            const orders = data;
           console.log("Restaurant order ",orders)
			dispatch({type:GET_RESTAURANT_ORDER_SUCCESS,payload:updatedOrder});
			
		} catch (error) {
			console.log("catch error",error)
			dispatch({type:UPDATE_ORDER_STATUS_FAILURE,error});
		}
        
	};
};