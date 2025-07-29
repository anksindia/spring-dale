"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./ui/PageLoader"; 
import QuickAccessFloating from "./QuickAccessFloating"; 

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // safety timeout

    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname === "/" && isLoading) {
    return <PageLoader setIsLoading={setIsLoading} />;
  }

  return (
    <>
      
      

      
      {children}
      <QuickAccessFloating />
    </>
  );
}
