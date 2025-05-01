"use client";

import LoadingPage from "@/components/loading/Loding";
import Main from "@/components/main/Main";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // 3초 후 로딩 종료
    }, 3000);
  }, []);

  return <div>{isLoading ? <LoadingPage /> : <Main />}</div>;
}
