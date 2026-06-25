import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchVideos = (url) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        axios.get(url)
            .then(response => {
                if (isMounted && response.data.success) {
                    setVideos(response.data.data);
                }
            })
            .catch(err => {
                if (isMounted) setError("ভিডিও গ্যালারি লোড করতে সমস্যা হয়েছে।");
                console.error(err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false; };
    }, [url]);

    return { videos, loading, error };
};

const VideoSkeleton = () => (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card border-0 shadow-sm p-3 placeholder-glow" style={{ borderRadius: '15px' }}>
            <div className="placeholder col-8 bg-secondary rounded mb-3" style={{ height: '20px' }}></div>
            <div className="ratio ratio-16x9 rounded placeholder bg-secondary" style={{ borderRadius: '10px' }}></div>
        </div>
    </div>
);

const VideoCard = ({ video }) => (
   
    <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div 
            className="card border-0 shadow-sm p-3 h-100 bg-white" 
            style={{ 
                borderRadius: '15px', 
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out' 
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
            }}
        >
            <h5 
                className="text-dark mb-3 text-truncate" 
                title={video.title}
                style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.4' }}
            >
                {video.title}
            </h5>
            <div className="ratio ratio-16x9 overflow-hidden rounded" style={{ borderRadius: '10px' }}>
                <iframe 
                    src={video.youtube_url} 
                    title={video.title} 
                    allowFullScreen
                    className="border-0"
                    loading="lazy" 
                ></iframe>
            </div>
        </div>
    </div>
);

const VideoGallery = () => {
    const { videos, loading, error } = useFetchVideos('http://127.0.0.1:8000/api/videos');

    return (
        <div className="container py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
       
            <div className="text-center mb-5">
                <h2 className="fw-bold text-dark position-relative d-inline-block pb-2" style={{ fontSize: '2rem' }}>
                    Our Video Gallery
                    <span 
                        className="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded" 
                        style={{ width: '60px', height: '4px' }}
                    ></span>
                </h2>
                <p className="text-muted mt-2">Watch and experience our recent campus programs and facilities</p>
            </div>

            {error && (
                <div className="alert alert-danger text-center rounded-3 p-4 shadow-sm max-w-md mx-auto" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i> {error}
                </div>
            )}

            <div className="row g-4 justify-content-center">
                {loading ? (
                
                    Array.from({ length: 6 }).map((_, idx) => <VideoSkeleton key={idx} />)
                ) : (
               
                    videos.map(video => <VideoCard key={video.id} video={video} />)
                )}

                {!loading && videos.length === 0 && !error && (
                    <div className="text-center text-muted py-5">
                        <p style={{ fontSize: '1.2rem' }}>কোনো ভিডিও পাওয়া যায়নি।</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoGallery;