import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadmovie } from '../Store/actions/MovieActions';
import { asyncloadtv } from '../Store/actions/TvActions';
import Loader from '../Utils/Loader';

function Trailer() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const category = pathname.includes("movie") ? "movie" : "tv";
  const info = useSelector(state => state[category]?.info);
  const ytvideo = info?.videos;

  useEffect(() => {
    if (!info) {
      if (category === "movie") {
        dispatch(asyncloadmovie(id));
      } else {
        dispatch(asyncloadtv(id));
      }
    }
  }, [dispatch, id, info, category]);

  if (!ytvideo) return <Loader />;

  return (
    <div className='absolute w-screen h-screen z-[100] top-0 left-0 bg-black bg-opacity-90 flex items-center justify-center text-white'>
      <Link
        onClick={() => navigate(-1)}
        className='hover:text-[#07E2F3] absolute ri-close-fill text-4xl text-white right-[5%] top-[5%]'
      />
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        controls
        playing
        width="75%"
        height="75%"
      />
    </div>
  );
}

export default Trailer;
