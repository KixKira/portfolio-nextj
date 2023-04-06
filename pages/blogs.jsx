import React from 'react';
import CardPost from '../components/CardPost';
import styles from '../styles/CardPost.module.css'
import Head from 'next/head';

const blogs = ({ posts }) => {
    console.log(posts);
    return (
        <>
            <Head>
                    <title>KixKira Blog</title>
                    <link rel="icon" href="/favicon.png" />
                </Head>
            <div>
                <div className={styles.contentCard}>
                    {
                        posts.map(item => (
                            <CardPost
                                key={item._id}
                                id={item._id}
                                title={item.title}
                                image={item.image[0].formats.small.url}
                                description={item.description}
                                date={item.createdAt}
                                url={item.url}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default blogs;

export async function getServerSideProps() {
    const url = 'http://kixkira.com/blogs';
    const response = await fetch(url);
    const responseJson = await response.json();

    return {
      props: {
        posts: responseJson
      }
    }
}