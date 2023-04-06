import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../Helpers";

const CardPost = ({ title, description, id, image, date, url}) => {
    return (
            <article className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border-gray-200 rounded-lg max-w-sm mb-5 h-[auto]">            
                    <Image 
                        src={`http://kixkira.com${image}`}
                        width={400}
                        height={400}
                        alt={title}
                        className="rounded-lg"
                    />
                    <div className="p-5">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2"><a href={`/blog/${url}`}>{title}</a></h5>
                        <p className="font-normal text-gray-700 mb-3 truncate">{description}</p>
                        <p className="mb-2 text-[#5651e5] font-bold">{formatDate(date)}</p>
                        <a href={`/blog/${url}`} className="text-white bg-[#5651e5] hover:bg-[#6762f6] focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            Leer mas
                        </a>
                    </div>
                </div>
            </article>
    )
}

export default CardPost;