import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Input } from '@headlessui/react';
import { Head , Link} from '@inertiajs/react';
import { useForm } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'posts',
        href: '/posts',
    },
];
export default function Dashboard({posts}:any) {
    const submitt = (e: any) => {
         put(route('posts.update', posts.id));

    }
  const { data, setData, put, processing, errors, reset } = useForm({
    title: posts.title, 
    body: posts.body,
  });
  console.log("cdcd")
  console.log(data.title)
  console.log(errors)

    console.log(data)
  return (
  <AppLayout breadcrumbs={breadcrumbs}>
    <Head title="posts" />

    <Link
      href="/posts"
      className="bg-blue-400 flex items-center justify-center rounded-md w-24 px-4 py-3 text-white m-4 hover:bg-blue-500 transition"
    >
      Back
    </Link>

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
            placeholder="Enter title"
          />
          {errors.title && (
            <div className="text-red-500 text-sm mt-1">{errors.title}</div>
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
            placeholder="Enter body"
          />
          {errors.body && (
            <div className="text-red-500 text-sm mt-1">{errors.body}</div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition cursor-pointer"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  </AppLayout>
);

}
