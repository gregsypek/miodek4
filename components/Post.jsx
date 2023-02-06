import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { urlFor } from '../lib/client';
// import {PortableText} from '@portabletext/react'

const Post = ({data}) => {
  console.log('data',data);
  const {title, mainImage, body, publishedAt} = data;
  return (
    <li
    className="post bg-whiteSecondary border-2 p-[2%]
    border-orangeTertiary rounded-md items-center py-7 flex flex-col
    gap-7 shadow-md "
  >
    <img src={urlFor(mainImage)} width={351} height={262}/>
    <p className="post__title text-orangeTertiary font-bold text tracking-wider">
     {title}
    </p>
    {/* instead of 'en-GB' can be undefined  - detect local timezone  */}
    <p className="post__date">{new Date(publishedAt).toLocaleDateString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p className="post__text max-w-medium text-center">

    </p>
    <Link
      href="/blog/1"
      className=" py-1 px-5 text-graySecondary bg-whitePrimary rounded-full  hover:bg-whitePrimary uppercase text-base border  border-graySecondary shadow-md"
    >
      Read more
    </Link>
  </li>
  )
}

export default Post