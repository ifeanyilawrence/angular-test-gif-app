import { START_LOADING, STOP_LOADING, STORE_ITEMS, STORE_SELECTED_ITEM } from './actionTypes';

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const getGif = (searchTerm, limit, OffSet) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading());
    
            const API_KEY = "deokzgUjxm6QHQdp3H3aca1LSZcCpucc";
    
            const queryParam = `?api_key=${API_KEY}&q=${searchTerm}&limit=${limit}&offset=${OffSet}&lang=en`;
    
            let parsedRes = await fetch("https://api.giphy.com/v1/gifs/search"+queryParam);

            if(parsedRes.status == 200){
                let res = await parsedRes.json();
                
                dispatch(storeItems(res.data, searchTerm))
            }

            dispatch(stopLoading());
        } catch (error) {
            console.log(error);
            dispatch(stopLoading);
        }
    }
}

export const storeSelectedItem = (item) => {
    return {
        type: STORE_SELECTED_ITEM,
        item
    }
}

export const storeItems = (items, searchTerm) => {
    return {
        type: STORE_ITEMS,
        items,
        searchItemText: searchTerm
    }
}