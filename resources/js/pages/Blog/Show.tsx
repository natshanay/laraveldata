import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head , Link} from '@inertiajs/react';
import React from 'react'
const breadcrumbs: BreadcrumbItem[] = [
    {

        title: 'posts',
        href: '/posts',

    },
];
const Show = ({posts}:any) => {
  return (
        <AppLayout breadcrumbs={breadcrumbs}>
              <Head title="posts" />
       <div className="w-full mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-12">
      {/* Back Button */}
      <Link href="/posts">
        <a className="inline-block mb-8 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          &larr; Back to Posts
        </a>
      </Link>

      {/* Post Card */}
      <div className="bg-white p-8 rounded-lg shadow-sm">
        {/* Title Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Title</h3>
          <p className="text-3xl font-bold text-gray-900">{posts.title}</p>
          <hr className="mt-4" />
        </div>

        {/* Body Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Body</h3>
          <p className="text-lg text-gray-800 whitespace-pre-line">{posts.body}</p>
          <hr className="mt-4" />
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-8 flex justify-end">
        <Link href={`/posts/${posts.id}/edit`}>
          <a className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
            Edit Post
          </a>
        </Link>
      </div>
    </div>
    </AppLayout>
  );
  
}

export default Show


