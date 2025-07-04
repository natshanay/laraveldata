import React from 'react'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, Link, useForm } from '@inertiajs/react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Posts',
    href: '/posts',
  },
]

const Create = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    body: '',
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post(route('posts.store'))
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Create Post" />
      <div className="max-w-xl mx-auto px-6 py-16">
        <Link
          href="/posts"
          className="inline-block mb-8 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition font-semibold"
          aria-label="Back to posts"
        >
          ← Back to Posts
        </Link>

        <form
          onSubmit={submit}
          className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 space-y-8"
          aria-label="Create post form"
        >
          <h2 className="text-3xl font-extrabold text-blue-900 text-center tracking-tight mb-6">
            Create New Post
          </h2>

          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-800 text-lg"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              placeholder="Enter post title"
              autoComplete="off"
              maxLength={100}
              aria-describedby="titleHelp"
              
            />
            {errors.title && (
              <p className="mt-1 text-red-600 font-semibold">{errors.title}</p>
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
              onChange={(e) => setData('body', e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition resize-y min-h-[150px]"
              placeholder="Write your post here..."
              maxLength={2000}
              aria-describedby="bodyHelp"
              
            />
            {errors.body && (
              <p className="mt-1 text-red-600 font-semibold">{errors.body}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={processing}
            className={`w-full py-4 rounded-xl font-extrabold text-white shadow-lg transition focus:outline-none focus:ring-4 focus:ring-blue-400 ${
              processing
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            aria-live="polite"
          >
            {processing ? 'Submitting...' : 'Submit Post'}
          </button>
        </form>
      </div>
    </AppLayout>
  )
}

export default Create
