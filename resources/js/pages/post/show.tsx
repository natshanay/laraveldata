import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Posts',
    href: '/posts',
  },
];

const Show = ({ posts }: any) => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={posts.title} />
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link
          href="/posts"
          className="inline-block mb-12 text-white px-6 py-3 bg-orange-300 text-gray-800 font-medium rounded-md shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          aria-label="Back to posts"
        >
          &larr; Back to Posts
        </Link>

        {/* Post Title */}
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight">
          {posts.title}
        </h1>

        {/* Post Body */}
        <article className="text-gray-800 text-lg leading-relaxed whitespace-pre-line prose prose-blue max-w-none">
          {posts.body}
        </article>

        {/* Post Date */}
        <p className="text-sm text-gray-500 italic mb-14 select-none">
          Posted on {new Date(posts.created_at).toLocaleDateString()}
        </p>

        {/* Edit Button */}
        <div className="mt-20 flex justify-end">
          <Link
            href={`/posts/${posts.id}/edit`}
            className="px-8 py-3 bg-orange-300  text-white font-medium rounded-md shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            aria-label="Edit this post"
          >
            Edit Post
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default Show;
