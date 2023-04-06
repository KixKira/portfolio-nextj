import Head from 'next/head';
import Image from "next/image";
import { formatDate } from "../../Helpers";

const Single = ({ single }) => {
    const { content, createdAt, image, title  } = single[0];

    return (
        <>
            <Head>
                <title>KixKira Blog | {title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="pt-8 pb-16 lg:pt-16 lg:pb-24">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg">
                        <div className="grid mb-4 lg:mb-6 not-format justify-items-center pt-10">
                            <Image
                                src={`http://kixkira.com${image[0].url}`}
                                alt={title}
                                width={500}
                                height={500}
                            />
                            <h1 className="text-center mt-5 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{title}</h1>
                            <p className='text-[#5651e5] font-bold'>{formatDate(createdAt)}</p>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: `<p>${content}</p>`}} className='text-justify'></div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Single;

export async function getServerSideProps({ query }) {
    const { url } = query;
    const urlNew = `http://kixkira.com/blogs?url=${url}`;
    const response = await fetch(urlNew);
    const responseJson = await response.json();

    return {
      props: {
        single: responseJson
      }
    }
}