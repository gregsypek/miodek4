import React from 'react'
import Link from "next/link";
import { client, urlFor } from "../lib/client";



const LastPostMini = ({post}) => {
  return (
    <li
    className="last-posts__item bg-whiteSecondary border-2 p-[2%]
border-orangeTertiary rounded-xl items-center  shadow-md hover:bg-orangeQuaternary hover:cursor-pointer "
  >
    <Link
      href={`/blog/${post?.slug?.current}`}
      className=" flex flex-row
gap-7 "
    >
      <img
        src={`${
          post.mainImage
            ? urlFor(post.mainImage)
                .width(140)
                .height(109)
                .fit("max")
                .auto("format")
            : "/no-image.png"
        } `}
        width={140}
        height={109}
        className="w-[140px] h-[109px] object-contain"
      />

      <div className="last-posts__info flex flex-col justify-between">
        <p className="post__title text-orangeTertiary font-bold text-lg tracking-wider">
          {post.title}
        </p>
        <p className="post__date text-sm text-graySecondary">
          {new Date(post?.publishedAt).toLocaleDateString(
            "en-GB",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </p>
      </div>
    </Link>
  </li>
  )
}

export default LastPostMini