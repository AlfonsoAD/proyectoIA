"use client";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "@/components/others/loader/Loader";
import msgValidation from "../../../hooks/access/validations/msgValidations";
import validation from "../../../hooks/access/validations/validations";
import { recoverPassword } from "@/hooks/access/signup";
import Link from "next/link";
import Image from "next/image";

const FormForgotPassword = () => {
  const { vEmail } = msgValidation();
  const { validationEmail } = validation();
  const [email, setEmail] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const errorEmail = vEmail(validationEmail(email));

  const recoverChangePassword = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    const response = await recoverPassword(email);
    if (!response.ok) {
      setShowSpinner(false);
      Swal.fire({
        title: "Error",
        text: `${response.results}`,
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Puedes recuperar tu contraseña",
      text: `Hemos enviado un correo electrónico a tu cuenta de correo proporcionada`,
      icon: "success",
    });
    setShowSpinner(false);
    setEmail("");
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
          <div className="flex flex-col items-center justify-center">
            <strong>
              {" "}
              <h1>Recuperar contraseña</h1>{" "}
            </strong>
          </div>

          <form className="space-y-4 md:space-y-6">
            {!showSpinner && (
              <div className="flex flex-col justify-center items-center gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email - name@company.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <small className="text-red-600">{errorEmail}</small>
              </div>
            )}
            {showSpinner && (
              <div className="flex flex-col items-center justify-center">
                <Loader />
                <p>
                  <strong>Enviando email ... </strong>
                </p>
              </div>
            )}
            <div className="flex flex-col items-center justify-center">
              <button
                type="button"
                className="w-60 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={(e) => recoverChangePassword(e)}
              >
                {" "}
                Recuperar contraseña
              </button>
              <Link
                href="/access/login"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 mt-2"
              >
                regresar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormForgotPassword;
