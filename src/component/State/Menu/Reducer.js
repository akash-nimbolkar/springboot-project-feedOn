import { Search } from '@mui/icons-material';
import * as actiontype from './ActionType';

const initialState={
    menuItems:[],
    loading:false,
    error:null,
    Search:[],
    message:null
};

const menuItemReducer =(state = initialState,action) =>{

    switch (action.type) {
        case actiontype.CREATE_MENU_ITEM_REQUEST:
        case actiontype.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case actiontype.DELETE_MENU_ITEM_REQUEST:
        case actiontype.SEARCH_MENU_ITEM_REQUEST:
        case actiontype.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
                return{
                    ...state,loading:true,
                    error:null,
                    message:null,
                    
                };
        
                case actiontype.CREATE_MENU_ITEM_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        menuItems:[...state.menuItems,action.payload],
                        message:"Food created successfully.."
                    };
                case actiontype.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        menuItems:action.payload,
                    };
                case actiontype.DELETE_MENU_ITEM_SUCCESS:
                    return{
                        ...state,loading:false,
                        menuItems:state.menuItems.filter(
                            (menuItem)=>menuItem.id !== action.payload
                        ),
                    };
                case actiontype.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
                    console.log("updated items id",action.payload.id)
                    return{
                        ...state,
                        loading:false,
                        menuItems:state.menuItems.map(
                            (menuItem)=>menuItem.id === action.payload.id?action.payload:menuItem
                        ),
                    };
                case actiontype.SEARCH_MENU_ITEM_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        Search:action.payload
                    };

                    case actiontype.CREATE_MENU_ITEM_FAILURE:
                    case actiontype.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
                    case actiontype.DELETE_MENU_ITEM_FAILURE:
                    case actiontype.SEARCH_MENU_ITEM_FAILURE:
                    case actiontype.UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
                            return{
                                ...state,
                                loading:false,
                                error:action.payload,
                                message:null
                            };
                    default:
                        return state;
    }
};

export default menuItemReducer;