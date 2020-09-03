import api from "../../utils/api";

export const  TOGGLE_LIKE = "TOGGLE LIKE"

export const toggleLike = (isLiked, id) => async (disptach ) => {
    try{
        if(isLiked){
           const payload = await api.deleteLike(id)
        }else{
            const payload = await api.postLike(id)
        }
    }
    catch{

    }

}
