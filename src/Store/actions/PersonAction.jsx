export { removeperson } from "../reducers/personSlice";
import axios from "../../Utils/Axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const images = await axios.get(`/person/${id}/images`);
    const taggedImages = await axios.get(`/person/${id}/tagged_images`);
    const translations = await axios.get(`/person/${id}/translations`);

    const theUltimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data,
      images: images.data.profiles,
      taggedImages: taggedImages.data.results,
      translations: translations.data.translations.map(t => t.english_name),
    };

    dispatch(loadperson(theUltimateDetails));
    console.log(theUltimateDetails);
  } catch (err) {
    console.log(err);
  }
};
