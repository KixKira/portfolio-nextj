import Link from 'next/link'
import { getPost, getSlugs } from '../../utils/wordpress'

export default function PostPage({ post }) {
    return (
        <div className='container pt-5'>
            <h1 className="text-center pb-5">{post.title.rendered}</h1>
            <div className="card-text pb-5" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
            <Link href="/">
                <a className="btn btn-primary">Volver al inicio</a>
            </Link>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = await getSlugs('posts');

    return {
        paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const post = await getPost(params.slug);

    return {
        props: {
            post,
        },
        revalidate: 10,
    };
}