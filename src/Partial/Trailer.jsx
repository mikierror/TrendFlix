import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadmovie } from '../Store/actions/MovieActions';
import { asyncloadtv } from '../Store/actions/TvActions';

function Trailer() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const category = pathname.includes("movie") ? "movie" : "tv";
  const info = useSelector(state => state[category]?.info);
  const ytvideo = info?.videos;

  useEffect(()=>{
    document.body.style.overflow="hidden"

    return ()=>{
          document.body.style.overflow="auto"
    }
  },[])

  useEffect(() => {
    if (!info) {
      category === "movie"
        ? dispatch(asyncloadmovie(id))
        : dispatch(asyncloadtv(id));
    }
  }, [dispatch, id, info, category]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center text-white">
      
      {/* Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute right-[5%] top-[5%] text-4xl hover:text-[#07E2F3]"
      >
        ✕
      </button>

      {/* Trailer */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${ytvideo?.key}`}
        controls
        playing
        width="70%"
        height="70%"
      />
    </div>
  );
}

export default Trailer;
