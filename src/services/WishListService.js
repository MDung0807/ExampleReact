import * as BaseAPI from './BaseAPI';

export const getWishList = async () =>{
    try{
        const response = await BaseAPI.getItems(address, localStorage.getItem('userId'));
        return response.data; 
    }
    catch(e){
        console.log(e.message);
    }
}

const address = "wish"