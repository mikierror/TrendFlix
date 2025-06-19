export {removemovie} from "../reducers/MovieSlice"
import axios from"../../Utils/Axios"
import { loadmovie } from "../reducers/MovieSlice"

export const asyncloadmovie = (id) => async(dispatch , getstate)=>{
 
    try{
             const detail=await axios.get(`/movie/${id}`)
             const externalId=await axios.get(`/movie/${id}/external_ids`)
             const recommendations=await axios.get(`/movie/${id}/recommendations`)
             const similar=await axios.get(`/movie/${id}/similar`)
             const videos=await axios.get(`/movie/${id}/videos`)
             const translation=await axios.get(`/movie/${id}/translations`)
             const watchproviders=await axios.get(`/movie/${id}/watch/providers`)
             let theultimatedetails={
                detail:detail.data,
                recommendations:recommendations.data,
                externalId:externalId.data,
                similar:similar.data.results,
                translation:translation.data.translations.map((item)=>item.english_name),
                videos:videos.data.results?.find(m=>m.type=="Trailer"),
                watchproviders:watchproviders.data.results.IN,
             }
           
            dispatch(loadmovie(theultimatedetails))
             console.log(theultimatedetails)
    }
    catch(err){
              console.log(err);
    }
}