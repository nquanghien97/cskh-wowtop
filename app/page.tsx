'use client';

import withAuth from "@/hocs/withAuth";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Trang chủ";
  }, [])

  return (
    <div className="p-4">
      hello world
    </div>
  );
}

const HomeWithAuth = withAuth(Home);
export default HomeWithAuth;
