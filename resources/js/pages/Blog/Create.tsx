import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Input } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import React from 'react'
const breadcrumbs: BreadcrumbItem[] = [
    {

        title: 'posts',
        href: '/posts',

    },
];

const create = () => {
     const submitt = (e: any) => {
         post(route('posts.store'));

    }
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    body: '',
  });
  
  console.log(errors)

    console.log(data)
 return (
  <>
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="posts" />

      <div className="flex flex-col gap-6 rounded-xl p-6 overflow-x-auto">
        <div className="max-w-md mx-auto w-full">
          <form action={submitt} className="space-y-6">
            <h3 className="bg-blue-500 p-2 text-white text-center rounded-sm text-xl font-semibold">
              Create your Post
            </h3>

            <label
              htmlFor="title"
              className="block text-2xl font-medium text-white bg-blue-400 rounded-md p-2 text-center"
            >
              Title
            </label>
            <Input
              id="title"
              className="mt-1 block w-full rounded-sm p-3 text-2xl border-2 border-black"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              autoComplete="off"
              placeholder="Title"
            />
            {errors.title && (
              <div className="text-red-400 text-sm mt-1">{errors.title}</div>
            )}

            <label
              htmlFor="body"
              className="block text-2xl font-medium text-white bg-blue-400 rounded-md p-2 text-center"
            >
              Body
            </label>
            <Input
              id="body"
              className="mt-1 block w-full rounded-sm p-3 text-2xl border-2 border-black"
              value={data.body}
              onChange={(e) => setData('body', e.target.value)}
              autoComplete="off"
              placeholder="Body"
            />
            {errors.body && (
              <div className="text-red-400 text-sm mt-1">{errors.body}</div>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </AppLayout>
  </>
);

}

export default create
