import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VideoChannel() {
  const [videos, setVideos] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [playingVideo, setPlayingVideo] = useState(null);

  const categories = ['All', 'Academic Lectures', 'Campus Events', 'Tutorials & Guides'];

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=50')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to synchronize channel catalog.');
        }
        return res.json();
      })
      .then((data) => {
        const transformedVideos = data.products.map((item, index) => {
          let category = 'Academic Lectures';
          let duration = `${10 + (item.id % 15)}:${20 + (item.id % 35)}`;
          let views = `${(item.id * 14) + 120} views`;
          let speaker = 'Senior Faculty Member';

          if (index % 3 === 0) {
            category = 'Academic Lectures';
            speaker = item.brand ? `Prof. ${item.brand}` : 'Department Head';
          } else if (index % 3 === 1) {
            category = 'Campus Events';
            speaker = 'Institutional Media Club';
          } else {
            category = 'Tutorials & Guides';
            speaker = 'ICT Support Desk';
          }

          return {
            id: item.id,
            title: `${category === 'Campus Events' ? 'Coverage:' : 'Lecture:'} ${item.title}`,
            description: item.description,
            thumbnail: item.images[0] || item.thumbnail,
            category: category,
            duration: duration,
            views: views,
            speaker: speaker,
            uploadDate: `${item.id % 28 + 1} days ago`,
            videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          };
        });

        setVideos(transformedVideos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getCategoryCount = (cat) => {
    if (cat === 'All') return videos.length;
    return videos.filter((v) => v.category === cat).length;
  };

  const filteredVideos = activeCategory === 'All'
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans relative">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 text-center">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight">📽️ Campus Video Channel</h1>
            <p className="text-blue-100 font-medium">
              {loading ? 'Opening stream lanes...' : `Accessing ${videos.length} Published Video Resource Guides`}
            </p>
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-gray-100 shadow-md">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mb-4"></div>
            <p className="text-gray-500 font-medium">Loading video configurations stream layout...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl text-center shadow-sm">
            <p className="font-bold mb-2">Stream Configuration Interrupted</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex flex-wrap justify-center gap-2 bg-white p-3 rounded-xl shadow-md border border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold transition duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#1e3a8a] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {cat} ({getCategoryCount(cat)})
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => setPlayingVideo(video)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                >
                  <div className="bg-gray-900 aspect-video overflow-hidden relative flex items-center justify-center">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition duration-500"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[10px] px-2 py-0.5 rounded font-bold tracking-wide">
                      {video.duration}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-red-600/90 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-red-600 transition duration-300">
                        <span className="text-xl ml-1 select-none">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block mb-1">
                        {video.category}
                      </span>
                      <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-[#1e3a8a] transition">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 font-medium leading-normal line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                    <div className="border-t border-gray-100 pt-3 flex flex-col space-y-1 text-[11px] font-semibold text-gray-500">
                      <div className="text-gray-700 truncate">🎙️ Presenter: <span className="font-bold">{video.speaker}</span></div>
                      <div className="flex items-center gap-2 text-gray-400 font-medium">
                        <span>👁️ {video.views}</span>
                        <span>•</span>
                        <span>{video.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="flex justify-center pt-4">
          <Link to="/" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl shadow-md transition text-decoration-none">
            Back to Home Dashboard
          </Link>
        </div>
      </div>
      {playingVideo && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setPlayingVideo(null)}
        >
          <button 
            onClick={() => setPlayingVideo(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white font-bold h-10 w-10 rounded-full flex items-center justify-center transition border border-white/10 shadow-md cursor-pointer z-50 text-sm"
          >
            ✕
          </button>

          <div 
            className="max-w-[850px] w-full flex flex-col space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video w-full">
              <video 
                src={playingVideo.videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 text-white space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {playingVideo.category}
                </span>
                <span className="text-gray-400 text-xs font-mono">Length: {playingVideo.duration}</span>
              </div>
              <h2 className="text-base font-bold tracking-tight text-blue-300">{playingVideo.title}</h2>
              <p className="text-xs text-gray-300 leading-relaxed font-medium">{playingVideo.description}</p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-400 font-bold border-t border-white/10 pt-3 mt-1">
                <span>Presenter: <span className="text-white font-medium">{playingVideo.speaker}</span></span>
                <span>•</span>
                <span>Audience metric: {playingVideo.views}</span>
                <span>•</span>
                <span>Released: {playingVideo.uploadDate}</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default VideoChannel;