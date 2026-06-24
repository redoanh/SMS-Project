import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PhotoAlbums() {
  const [albums, setAlbums] = useState({});
  const [activeAlbumKey, setActiveAlbumKey] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=60')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not synchronize campus gallery assets.');
        }
        return res.json();
      })
      .then((data) => {
        const schoolGalleries = {
          "Annual Sports Day": [],
          "Science & Tech Expo": [],
          "Cultural Festival": [],
          "Academic & ICT Campus": []
        };

        data.products.forEach((item, index) => {
          let targetGallery = "Academic & ICT Campus";
          let eventDescription = "Moments captured around our modern classrooms and campus infrastructure.";

          if (index % 4 === 0) {
            targetGallery = "Annual Sports Day";
            eventDescription = "Inter-house track and field competitions, football tournaments, and award ceremonies.";
          } else if (index % 4 === 1) {
            targetGallery = "Science & Tech Expo";
            eventDescription = "Students demonstrating engineering prototypes, biology models, and code experiments.";
          } else if (index % 4 === 2) {
            targetGallery = "Cultural Festival";
            eventDescription = "Traditional performances, music celebrations, drama acts, and art displays.";
          }

          schoolGalleries[targetGallery].push({
            id: item.id,
            title: `Campus Event Photo #${100 + item.id}`,
            description: eventDescription,
            url: item.thumbnail,
            dimensions: `${1200 + (item.id * 10)} x 800 (HD)`,
            uploadDate: `Feb ${10 + (item.id % 18)}, 2026`
          });
        });

        setAlbums(schoolGalleries);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const allPhotos = Object.values(albums).flat();

  const visiblePhotos = activeAlbumKey === 'All' 
    ? allPhotos 
    : (albums[activeAlbumKey] || []);

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-12 px-4 font-sans relative">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 text-center">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Institutional Photo Gallery</h1>
            <p className="text-blue-100 font-medium">
              {loading ? 'Compiling campus history...' : `Browsing ${Object.keys(albums).length} Event Albums (${allPhotos.length} Total Captures)`}
            </p>
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-gray-100 shadow-md">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mb-4"></div>
            <p className="text-gray-500 font-medium">Streaming archive visual nodes from DummyJSON backend...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl text-center shadow-sm">
            <p className="font-bold mb-2">Media Load Error</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex flex-wrap justify-center gap-2 bg-white p-3 rounded-xl shadow-md border border-gray-100">
              <button
                onClick={() => setActiveAlbumKey('All')}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold transition duration-200 cursor-pointer ${
                  activeAlbumKey === 'All'
                    ? 'bg-[#1e3a8a] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Show All ({allPhotos.length})
              </button>
              
              {Object.keys(albums).map((albumName) => (
                <button
                  key={albumName}
                  onClick={() => setActiveAlbumKey(albumName)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold transition duration-200 cursor-pointer ${
                    activeAlbumKey === albumName
                      ? 'bg-[#1e3a8a] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                >
                  📁 {albumName} ({albums[albumName].length})
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {visiblePhotos.map((photo, index) => (
                <div 
                  key={`${photo.id}-${index}`}
                  onClick={() => setLightboxImage(photo)}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                >
                  <div className="bg-gray-50 aspect-video sm:aspect-square overflow-hidden relative flex items-center justify-center p-4 border-b border-gray-100">
                    <img 
                      src={photo.url} 
                      alt={photo.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="bg-white text-gray-900 text-xs font-bold py-2 px-4 rounded-xl shadow-md flex items-center gap-1.5">
                        Expand Photo 🔍
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition">
                        {photo.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-medium leading-relaxed line-clamp-2">
                        {photo.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-gray-400 font-semibold pt-3 mt-3 border-t border-gray-100">
                      <span>📅 {photo.uploadDate}</span>
                      <span className="font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{photo.dimensions}</span>
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
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white font-bold h-10 w-10 rounded-full flex items-center justify-center transition border border-white/10 shadow-md cursor-pointer z-50 text-sm"
          >
            ✕
          </button>

          <div 
            className="max-w-[750px] w-full flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
     
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center justify-center w-full max-h-[70vh] shadow-2xl">
              <img 
                src={lightboxImage.url} 
                alt={lightboxImage.title} 
                className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-md"
              />
            </div>
            <div className="text-center text-white space-y-1.5 px-4 max-w-[600px]">
              <h2 className="text-lg font-bold tracking-tight text-blue-400">{lightboxImage.title}</h2>
              <p className="text-xs text-gray-300 font-medium leading-relaxed">{lightboxImage.description}</p>
              <div className="flex items-center justify-center gap-4 text-[11px] font-bold text-gray-400 pt-1 font-mono">
                <span>Record Date: {lightboxImage.uploadDate}</span>
                <span>•</span>
                <span>Resolution: {lightboxImage.dimensions}</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => setLightboxImage(null)}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-2 px-6 rounded-lg transition border border-white/10 cursor-pointer"
              >
                Close Fullscreen
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default PhotoAlbums;