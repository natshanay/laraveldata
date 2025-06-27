import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head , Link, useForm} from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {

        title: 'posts',
        href: '/posts',

    },
];

export default function Dashboard({posts}:any) {

    const { data, setData, delete:destroy , processing, errors, reset } = useForm({

       title: '',
       body: ''

     });
    
    const deleteitem=(id:any)=>{
        if (confirm('Are you sure you want to delete this post?')) {
            destroy(route('posts.destroy', id))
        }
    
    }
console.log(posts)
 return (
  <AppLayout breadcrumbs={breadcrumbs}>
    <Head title="posts" />

    <Link
      className="bg-blue-400 text-white px-4xl flex items-center m-2  w-24 justify-center rounded-lg"
      href="posts/create"
    >
      Create Post
    </Link>

    {posts?.map?.((post?: any) => (
      <div
        key={post.id}
        className="p-5 bg-purple-800 rounded-lg m-2 flex flex-col items-start text-white"
      >
        {/* Actions */}
        <div className="flex gap-3 mb-4">
          <Link
            href={`/posts/${post.id}/edit`}
            className="px-3 py-1 bg-green-400 text-black font-medium rounded cursor-pointer hover:bg-green-500 transition"
          >
            Edit
          </Link>
          <Link
            href={`/posts/${post.id}`}
            className="px-3 py-1 bg-white text-black font-medium rounded cursor-pointer hover:bg-gray-200 transition"
          >
            Show
          </Link>
          <button
            onClick={() => deleteitem(post.id)}
            className="px-4 py-1 bg-red-400 text-white font-medium rounded cursor-pointer hover:bg-red-500 transition"
          >
            Delete
          </button>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-2">{post.title}</h2>

        {/* Body */}
        <p className="text-white">{post.body}</p>
      </div>
    ))}
  </AppLayout>
);

}
