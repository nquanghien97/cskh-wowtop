'use client'

import "./globals.css";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { menuSidebar } from "@/constants/menuSidebar";
// import "react-datepicker/dist/react-datepicker.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { getMe } = useAuthStore();

  useEffect(() => {
    (async () => {
      await getMe()
    })()
  }, [getMe])

  return (
    <html lang="en">
      <body
        className={`bg-[#faf2de] font-normal`}
      >
        {pathname.startsWith('/login') ? (
          children
        ) : (
          <div className="flex">
            <Sidebar menuSidebar={menuSidebar}  />
            <main className="bg-[#faf2de] w-[calc(100%-240px)] h-screen">
              {children}
            </main>
          </div>
        )}
        <ToastContainer />
      </body>
    </html>
  );
}
