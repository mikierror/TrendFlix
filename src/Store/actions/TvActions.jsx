import axios from "../../Utils/Axios";
import { loadtv, removetv } from "../reducers/TvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const translation = await axios.get(`/tv/${id}/translations`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

    const theultimatedetails = {
      detail: detail.data,
      recommendations: recommendations.data,
      externalId: externalId.data,
      similar: similar.data.results,
      translation: translation.data.translations.map((item) => item.english_name),
      videos: videos.data.results?.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };

    dispatch(loadtv(theultimatedetails));
    console.log(theultimatedetails);
  } catch (err) {
    console.log(err);
  }
};
