import React from 'react';
import CardPost from '../components/CardPost';
import styles from '../styles/CardPost.module.css'
import Head from 'next/head';
import { getEvents, getPosts } from '../utils/wordpress'
import Post from '../components/Post'
import Event from '../components/Event'

const blogs = ({ posts, events }) => {
    const jsxPosts = posts.map((post) => {
        const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
        return <Post post={post} featuredMedia={featuredMedia} key={post.id} />
    });

    const jsxEvents = events.map((event) => {
        const featuredMedia = event['_embedded']['wp:featuredmedia'][0];
        return <Event event={event} featuredMedia={featuredMedia} key={event.id} />;
    });

    return (
        <>
            <Head>
                <title>KixKira Blog</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Keep up to date with the latest trends in tech" />
            </Head>
            <div className="container pt-5">
                <h1 className="text-center pb-5">KixKira Blogs</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <h2 className="pb-3">Blog Posts</h2>
                        {jsxPosts}
                    </div>
                    <div className="col-lg-4">
                        <h2 className="pb-3">Eventos</h2>
                        {jsxEvents}
                    </div>
                </div>
            </div>
        </>
    );
};

export default blogs;

export async function getStaticProps({ params }) {
    const posts = await getPosts();
    const events = await getEvents();
    const media = await getMedia();

    return {
        props: {
            posts,
            events,
        },
        revalidate: 10,
    };
}