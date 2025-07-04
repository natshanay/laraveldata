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

const Index = ({ posts }: any) => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Posts" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 border-b-4 border-blue-600 pb-2">
            Latest Posts
          </h1>
          <Link
            href="/posts/create"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            + Create Post
          </Link>
          <Link
            href="/blogs"
            className="inline-block bg-orange-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Go To Blogs
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
                <p className="text-lg text-gray-600 line-clamp-4">{post.body}</p>
              </div>
              <div className="bg-gray-100 p-4 text-right">
                <p className="text-sm text-gray-500">
                  Posted on: {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
