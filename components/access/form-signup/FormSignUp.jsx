"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { saveUsers } from "@/hooks/access/signup";
import Swal from "sweetalert2";
import SpinnerLoad from "@/components/others/spinner/SpinnerLoad";

const FormSignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const postSaveUser = async (e) => {
    setShowSpinner(true);
    e.preventDefault();
    let response = await saveUsers(userName, email, password);
    if (response.ok) {
      setShowSpinner(false);
      Swal.fire({
        title: "Éxito",
        text: "Se ha registrado correctamente",
        icon: 3000,
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
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
            <div className="flex flex-col items-center justify-center">
              <strong>
                {" "}
                <h1>Registro</h1>{" "}
              </strong>
            </div>
            <form id="form" action="POST" className="space-y-4 md:space-y-6">
              <div className="flex flex-col justify-center items-center gap-2">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email - name@company.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="w-60 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  onClick={(e) => postSaveUser(e)}
                >
                  {" "}
                  Guardar
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  <Link
                    href="/access/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Iniciar sesión
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SpinnerLoad show={showSpinner} />
    </>
  );
};

export default FormSignUp;
