// import React, { useState } from 'react'
import React, { useState } from 'react'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'
// type ShowProps = {
//   posts: App.Data.Post.BlogData;
// };

export default function Index({ posts }:any) {
    const { data, setData, put, processing, errors } = useForm({
      title: posts.title,
      body: posts.body,
    })
  console.log(posts)
  return (
    <>
        <div className="p-9 flex justify-center gap-50 items-center mb-10">
    {/* <h4 className='bg-green-900'>Latest Posts</h4> */}
               
                <Link href='/blogs/latest'
                  
                  className="inline-block bg-white hover:bg-white text-grey-900 hover:text-4xl font-semibold px-6 py-3 rounded-md shadow-md transition"
                >
               Find Our latest posts
                </Link>
                <Link
                  href="/posts/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
                >
                  Back To Posts Page
                </Link>
                <Link
                  href="/blogs/others"
                  className="inline-block bg-orange-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
                >
    Others
                </Link>
              </div>
    {   posts.map((post:any)=>(
      <>

      
      <Link href={`posts/${post.id}`} className="flex b-600 py-4 text-black hover:bg-orange-400 hover:text-white flex items-center justify-center  items-center justify-center p-2 m-4 text-5xl font-extrabold text-gray-900 border-b-4 border-blue-600 pb-2">
             Posts By Id: {post.id}
          </Link>
    {/* <Link href= className="py-4   flex flex-center items-center flex gap-4 bg-pink-600 text-white "> */}
     <div className='flex rounded-lg  flex-col m-19 items-center px-6 py-12 bg-blue-600 text-white text-3xl justify-center'>
          < div className="ml-10 ">
         
                <p className='text-black bg-white border  rounded-sm p-3 m-2'>{post.created_at}</p>
          <div className='flex flex-col gap-5'>

          <div className='bg-orange-500 text-white border-2 items-center justify-center flex flex-col p-4 rounded-lg shadow-lg'>
              <h1>{post.title}</h1>
         
            
          </div>
          
          <div className='bg-orange-500 text-white border-2 items-center justify-center flex flex-col p-4 rounded-lg shadow-lg'>
     
            <p>{post.body}</p>
            
          </div>
          </div>


          {/* <p className='bg-white text-black flex items-center justify-center py-3 '>published date </p> */}
        


          </div>
     </div>
      
    </>
    ))}
    

    {/* </Link> */}
   
      </>
  );
}
