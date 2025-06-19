import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { asyncloadperson } from '../Store/actions/PersonAction';
import { removeperson } from '../Store/reducers/personSlice';
import Loader from '../Utils/Loader';

function PersonDetails() {
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => dispatch(removeperson());
  }, [id, dispatch]);

  if (!info) return <Loader />;

  return (
    <div className="w-screen min-h-[100vh] px-6 md:px-20 py-10 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      {/* Back Navigation */}
      <button
        onClick={() => navigate(-1)}
        className="text-xl text-zinc-300 hover:text-cyan-400 transition-all mb-8 flex items-center gap-2"
      >
        <i className="ri-arrow-left-line text-2xl"></i> Back
      </button>

      {/* Person Info Card */}
      <div className="flex flex-col md:flex-row gap-10 items-start bg-[#1e293b] rounded-2xl shadow-lg p-6">
        <img
          src={`https://image.tmdb.org/t/p/original${info?.detail?.profile_path}`}
          alt="profile"
          className="h-[400px] w-[270px] object-cover rounded-xl shadow-md"
        />

        <div className="flex-1 space-y-5">
          <div>
            <h1 className="text-4xl font-bold">{info.detail.name}</h1>
            <p className="text-lg text-zinc-400 italic mt-1">{info.detail.known_for_department}</p>
          </div>

          {info.detail.birthday && (
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-zinc-300">
              <span className="bg-zinc-700 px-4 py-1 rounded-full">🎂 {info.detail.birthday}</span>
              {info.detail.place_of_birth && (
                <span className="bg-zinc-700 px-4 py-1 rounded-full">📍 {info.detail.place_of_birth}</span>
              )}
            </div>
          )}

          {/* Biography */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Biography</h2>
            <p className="text-zinc-200 leading-relaxed max-w-3xl">
              {info.detail.biography || "No biography available."}
            </p>
          </div>

          {/* Languages */}
          {info.translations && info.translations.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Languages Spoken</h2>
              <div className="flex flex-wrap gap-2">
                {info.translations.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-700 px-3 py-1 rounded-full text-sm text-white"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Images / Credits section (placeholder) */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Known For</h2>
        {/* Optional: You can map over movieCredits or tvCredits here */}
        <p className="text-zinc-400 italic">Movie & TV credits section coming soon...</p>
      </div>
    </div>
  );
}

export default PersonDetails;
