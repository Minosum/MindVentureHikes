"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import styles from "./InstagramPosts.module.css";
import { GoLink } from "react-icons/go";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import Modal from "../Modal/Modal";


type InstagramPost = {
    id: string;
    caption?: string;
    media_type: string;
    media_url: string;
    timestamp: string;
    permalink: string;
};

const InstagramPosts: React.FC = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const userId = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

    useEffect(() => {
        const fetchPosts = async () => {
            const url = `https://graph.facebook.com/v21.0/${userId}/media?fields=id,caption,media_type,media_url,timestamp,permalink&access_token=${accessToken}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data.data || []);
            } catch (err) {
                setError("Failed to fetch Instagram posts");
            } finally {
                setIsLoading(false);
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
            <h1 className={styles.heading}>Our Adventures</h1>
            <Swiper
                modules={[FreeMode, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {posts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <div className={styles.card}>
                            {post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM" ? (
                                <>
                                <img
                                    src={post.media_url}
                                    alt={"Instagram Post"}
                                    className={styles.media}
                                />
                                </>
                            ) : post.media_type === "VIDEO" ? (
                                <video
                                    src={post.media_url}
                                    controls
                                    className={styles.media}
                                />
                            ) : null}
                            <small className={styles.timestamp}>
                                {new Date(post.timestamp).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "long",
                                })}
                            </small>
                            <div className={styles.postInfo}>
                            <a
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <GoLink size={20}/>
                            </a>
                            <a><Modal message={post.caption || ''}/></a>
                            </div>
                            
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default InstagramPosts;
