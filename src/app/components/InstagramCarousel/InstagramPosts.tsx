'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './InstagramPosts.module.css';

type InstagramPost = {
    id: string;
    caption?: string;
    media_type: string;
    media_url: string;
    timestamp: string;
};

const InstagramPosts: React.FC = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const userId = '17841464642243861'; // Replace with your Instagram user ID
    const accessToken = 'EAAWZBxp0bZBfQBOZBVZBQIDy54xvVqJVZAove8z61xF5XtIfdGHor0ZC88xjeOyPCkvKmoMM17JJuciDiDmyTIhZBrCkMOdqG1IxO0W4O6g8tHGwV9ofkKnQvAf63EWTdhdvDSl5b9H1k5BIuKzufCzLr2IBQZAQslyASfseNXqRFEf9qlL1Ouv6hoMY';

    useEffect(() => {
        const fetchPosts = async () => {
            const url = `https://graph.facebook.com/v21.0/${userId}/media?fields=id,caption,media_type,media_url,timestamp&access_token=${accessToken}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('API Response:', data); // Log the entire response
                setPosts(data.data || []);
            } catch (err) {
                setError('Failed to fetch Instagram posts');
                console.error(err);
            } finally {
                setIsLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchPosts();
    }, [userId, accessToken]);

    if (isLoading) {
        return (
            <div className={styles.spinnerContainer}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    if (error) {
        return <p className={styles.error}>Error: {error}</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Instagram Posts</h1>
            <div
                className={styles.carousel}
            >
                {posts.map((post) => (
                    <div key={post.id} className={styles.card}>

                        {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                            <img
                                src={post.media_url}
                                alt={post.caption || 'Instagram Post'}
                                className={styles.media}
                            />
                        ) : post.media_type === 'VIDEO' ? (
                            <video
                                src={post.media_url}
                                controls
                                className={styles.media}
                            />
                        ) : null}
                        {/* <p className={styles.caption}>{post.caption || 'No caption available'}</p> */}
                        <small className={styles.timestamp}>
                            {new Date(post.timestamp).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramPosts;
