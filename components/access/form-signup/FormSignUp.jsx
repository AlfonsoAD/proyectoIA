"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { saveUsers } from "@/hooks/access/signup";
import Swal from "sweetalert2";
import Loader from "@/components/others/loader/Loader";
import msgValidation from "../../../hooks/access/validations/msgValidations";
import validation from "../../../hooks/access/validations/validations";

const FormSignUp = () => {
  const { vUserName, vEmail, vPassword, vPasswordConfirm } = msgValidation();
  const { validationUserName, validationEmail, validationPassword } =
    validation();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const errorUserName = vUserName(validationUserName(userName));
  const errorEmail = vEmail(validationEmail(email));
  const errorPassword = vPassword(validationPassword(password));
  const errorPasswordConfirm = vPasswordConfirm(password, confirmPassword);
  const postSaveUser = async (e) => {
    setShowSpinner(true);
    e.preventDefault();
    let response = await saveUsers(userName, email, password);
    if (!response.ok) {
      setShowSpinner(false);
      Swal.fire({
        title: "Error",
        text: `${response.results}- verifique sus datos`,
        icon: "error",
      });
      return;
    }
    if (response.ok) {
      setShowSpinner(false);
      cleanFields();
      Swal.fire({
        title: "Se ha registrado correctamente",
        text: "Te hemos enviado un correo electrónico para confirmar tu cuenta",
        icon: "success",
      });
    }
  };

  const cleanFields = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setPassword("");
    setConfirmPassword("");
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
            {!showSpinner && (
              <form id="form" action="POST" className="space-y-4 md:space-y-6">
                <div className="flex flex-col justify-center items-center gap-2">
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                  <small className="text-red-600">{errorUserName}</small>
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email - name@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <small className="text-red-600">{errorEmail}</small>
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <small className="text-red-600">{errorPassword}</small>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                  <small className="text-red-600">{errorPasswordConfirm}</small>
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
            )}
            {showSpinner && (
              <div className="flex flex-col justify-center items-center">
                <Loader />
                <p>
                  <strong>Guardando ...</strong>{" "}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSignUp;
