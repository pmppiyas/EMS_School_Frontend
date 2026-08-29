import Footer from '@/app/components/module/home/Footer';
import Navbar from '@/app/components/shared/Navbar';
import React from 'react';

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="w-full flex flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}
