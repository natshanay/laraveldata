import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
const About = ({posts}:any) => {
  return (
    <>
    <Link className='bg-red-400 text-white px-4 items-center p-2 m-3 pt-3 mt-4 flex items center justify-center hover:bg-red-600 hover:text-3xl ' href="/blogs">Go Back to your Blog</Link>
    <div className='bg-blue-600 text-6xl py-8 m-4 text-white flex items-center justify-center flex-col gap-40'>
    others
    </div>
      <div className='bg-orange-400 m-20 items-center justify-between flex-col flex text-white'>
          <div className='p-20 border-3 m-3 text-1xl rounded-lg'>
        {

            posts.map((post:any)=>(
                <div className='flex items-start '>
                {post.title}
                </div>
            ))
        }
        </div>
        <div></div>
        <div>items creted recently</div>
      </div>
    </>
  )
}

export default About
