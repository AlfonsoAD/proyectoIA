"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { accountConfirm } from "@/hooks/access/signup";
import Loader from "@/components/others/loader/Loader";
import { useState } from "react";
import Swal from "sweetalert2";

const FormConfirm = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let url = window.location.search;
    let auxUrl = url.substring(1, url.length);
    let auxSplit = auxUrl.split("=");
    let token = auxSplit[1];
    setShowSpinner(true);
    confirmTheAccount(token);
  }, []);

  const confirmTheAccount = async (token) => {
    const resp = await accountConfirm(token);
    if (!resp.ok) {
      setShowSpinner(false);
      Swal.fire({
        title: "Error",
        text: `${resp.results}`,
        icon: "error",
      });
      return;
    }
    setShowSpinner(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex flex-row justify-center items-center ">
            <Image
              className="w-8 h-8 mr-2"
              src="https://github.com/AlfonsoAD/Cliente2aligamx/assets/90345024/f4c4fc12-8959-4c82-aa78-894b74905b93"
              alt="logo"
              height={250}
              width={250}
            />
            <strong>
              {" "}
              <h1>sphere</h1>{" "}
            </strong>
          </div>
          {showSpinner && (
            <div className="flex flex-col justify-center items-center">
              <Loader />
              <p>
                <strong>Verificando ...</strong>
              </p>
            </div>
          )}
          {!showSpinner && (
            <>
              <div className="flex flex-col items-center justify-center">
                <strong>
                  {" "}
                  <h1>Inicia sesión para completar el proceso</h1>{" "}
                </strong>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Link
                  type="button"
                  className="w-60 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 flex flex-col items-center justify-center"
                  href="/access/login"
                >
                  {" "}
                  Iniciar Sesión
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormConfirm;
