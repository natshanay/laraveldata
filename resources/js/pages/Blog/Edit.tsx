import React, { useState } from 'react'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Posts',
    href: '/posts',
  },
]

const EditPost = ({ posts }: any) => {
  const { data, setData, put, processing, errors } = useForm({
    title: posts.title,
    body: posts.body,
  })

  const [bodyCharCount, setBodyCharCount] = useState(data.body.length)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    put(route('posts.update', posts.id))
  }

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData('body', e.target.value)
    setBodyCharCount(e.target.value.length)
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Edit Post" />
      <div className="max-w-xl mx-auto px-6 py-16 min-h-screen">
        <Link
          href="/posts"
          className="inline-block mb-8 px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition font-semibold"
          aria-label="Back to posts"
        >
          ← Back to Posts
        </Link>

        <form
          onSubmit={submit}
          className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 space-y-8"
          aria-label="Edit post form"
        >
          <h2 className="text-4xl font-extrabold text-blue-900 text-center tracking-tight">
            Edit Your Post
          </h2>

          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              Title
            </label>
            <input
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-red-300 transition"
              type="text"
              id="title"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              placeholder="Enter your post title"
              autoComplete="off"
              maxLength={100}
              aria-describedby="titleHelp"
              required
            />
            <p id="titleHelp" className="mt-1 text-sm text-gray-500 select-none">
              Max 100 characters
            </p>
            {errors.title && (
              <p className="text-red-600 font-semibold mt-2">{errors.title}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="body"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              Body
            </label>
            <textarea
              id="body"
              value={data.body}
              onChange={onBodyChange}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-red-300 transition resize-y min-h-[150px]"
              placeholder="Write your post content here..."
              maxLength={2000}
              aria-describedby="bodyHelp"
              required
            />
            <div className="flex justify-between mt-1 text-gray-500 text-sm select-none">
              <p id="bodyHelp">Max 2000 characters</p>
              <p>{bodyCharCount} / 2000</p>
            </div>
            {errors.body && (
              <p className="text-red-600 font-semibold mt-2">{errors.body}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={processing}
            className={`cursor-pointer w-full py-4 rounded-xl font-extrabold text-white shadow-lg transition focus:outline-none focus:ring-4 focus:ring-red-400 ${
              processing
                ? 'bg-red-300 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700'
            }`}
            aria-live="polite"
          >
            {processing ? 'Updating...' : 'Update Post'}
          </button>
        </form>
      </div>
    </AppLayout>
  )
}

export default EditPost
