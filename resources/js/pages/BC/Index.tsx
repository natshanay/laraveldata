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
    <h2 className='bg-red-500 flex items-center justify-center  text-white text-4xl'>hey there</h2>
    </AppLayout>
  );
};

export default Index;
