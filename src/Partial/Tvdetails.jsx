import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadtv } from '../Store/actions/TvActions';
import { removetv } from '../Store/reducers/TvSlice.js';
import Loader from '../Utils/Loader';
import HorizantolCard from '../Components/HorizantolCard';

function TVDetails() {
  const { id } = useParams();
  const { info } = useSelector(state => state.tv);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => dispatch(removetv());
  }, [id, dispatch]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url('https://image.tmdb.org/t/p/original${info?.detail?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='w-screen min-h-[130vh] px-6 md:px-24 py-10 bg-slate-900 text-white'
    >
      {/* Navigation */}
      <nav className='flex items-center gap-6 text-xl mb-8'>
        <button
          onClick={() => navigate(-1)}
          className='text-2xl text-zinc-300 hover:text-[#07E2F3] transition-all'
        >
          <i className='ri-arrow-left-line'></i>
        </button>
        {info?.detail?.homepage && (
          <a href={info.detail.homepage} target='_blank' rel='noreferrer'>
            <i className='hover:text-[#07E2F3] ri-external-link-fill'></i>
          </a>
        )}
        {info?.externalId?.wikidata_id && (
          <a
            href={`https://wikidata.org/wiki/${info.externalId.wikidata_id}`}
            target='_blank'
            rel='noreferrer'
          >
            <i className='hover:text-[#07E2F3] ri-global-line'></i>
          </a>
        )}
        {info?.externalId?.imdb_id && (
          <a
            href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
            className='hover:text-yellow-400'
            target='_blank'
            rel='noreferrer'
          >
            IMDB
          </a>
        )}
      </nav>

      {/* TV Info */}
      <div className='flex flex-col md:flex-row items-start gap-10'>
        <img
          src={`https://image.tmdb.org/t/p/original${info?.detail?.poster_path || info?.detail?.backdrop_path}`}
          className='h-[45vh] w-64 object-cover rounded-md shadow-lg transition-transform hover:scale-[1.03]'
          alt='poster'
        />

        <div className='flex-1'>
          <h1 className='text-4xl font-bold mb-1'>
            {info.detail.name || info.detail.original_name}
            <span className='ml-2 text-2xl text-zinc-300 font-light'>
              ({info.detail.first_air_date?.split('-')[0]})
            </span>
          </h1>

          {/* Score + Info */}
          <div className='mt-3 mb-4 flex flex-wrap items-center gap-5 text-zinc-100'>
            <div className='text-xl font-semibold h-12 w-12 flex items-center justify-center text-white bg-yellow-500 rounded-full animate-pulse'>
              {parseInt(info.detail.vote_average * 10)}
              <sup className='text-xs ml-1'>%</sup>
            </div>
            <p className='text-xl font-semibold'>User Score</p>
            <p>{info.detail.first_air_date}</p>
            <div className='flex flex-wrap gap-2'>
              {info.detail.genres.map((genre) => (
                <span
                  key={genre.id}
                  className='bg-zinc-700 text-sm px-3 py-1 rounded-full'
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <h2 className='italic text-zinc-300 mb-4'>{info.detail.tagline}</h2>

          <h3 className='text-2xl font-semibold mt-5 mb-2'>Overview</h3>
          <p className='text-zinc-200 leading-relaxed'>{info.detail.overview}</p>

          <h3 className='text-2xl font-semibold mt-5 mb-2'>Languages</h3>
          <p className='mb-6 text-zinc-300'>{info.translation.join(", ")}</p>

          <Link
            to={`${pathname}/Trailer`}
            className='inline-block rounded-md py-3 px-6 text-lg font-semibold bg-[#07E2F3] hover:bg-[#0bf0ff] transition-all'
          >
            <i className="ri-play-fill mr-2 text-xl"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Watch Providers */}
      <div className='mt-10 space-y-6'>
        {info?.watchproviders?.flatrate && (
          <div className='flex gap-6 items-center overflow-x-auto'>
            <h1 className='whitespace-nowrap'>Available on:</h1>
            {info.watchproviders.flatrate.map((provider) => (
              <img
                key={provider.provider_id}
                title={provider.provider_name}
                className='h-12 rounded-md bg-white p-1'
                src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                alt={provider.provider_name}
              />
            ))}
          </div>
        )}
        {info?.watchproviders?.rent && (
          <div className='flex gap-6 items-center overflow-x-auto'>
            <h1 className='whitespace-nowrap'>Available to Rent:</h1>
            {info.watchproviders.rent.map((provider) => (
              <img
                key={provider.provider_id}
                title={provider.provider_name}
                className='h-12 rounded-md bg-white p-1'
                src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                alt={provider.provider_name}
              />
            ))}
          </div>
        )}
        {info?.watchproviders?.buy && (
          <div className='flex gap-6 items-center overflow-x-auto'>
            <h1 className='whitespace-nowrap'>Available to Buy:</h1>
            {info.watchproviders.buy.map((provider) => (
              <img
                key={provider.provider_id}
                title={provider.provider_name}
                className='h-12 rounded-md bg-white p-1'
                src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                alt={provider.provider_name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Recommendations */}
      <hr className='mt-12 mb-6 border-none h-[2px] bg-zinc-600' />
      <h1 className='text-3xl font-bold mb-6'>Recommendations & Similar</h1>
      <HorizantolCard
        trending={info.recommendations ? info.recommendations.results : info.similar}
      />

      {/* Nested route (Trailer) */}
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default TVDetails;
