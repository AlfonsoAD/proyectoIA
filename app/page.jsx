"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "@/components/others/loader/Loader";
import { timer } from "rxjs";

const page = () => {
  const router = useRouter();
  const splash = timer(1000);

  useEffect(() => {
    splash.subscribe(() => redirectToLogin());
  }, []);

  const redirectToLogin = () => {
    router.push("/access/login");
  };

  return (
    <main className=" flex flex-col justify-center items-center min-h-screen">
      <Loader />;
    </main>
  );
};

export default page;
