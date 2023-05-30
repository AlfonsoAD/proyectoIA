import LayoutAcces from "@/components/access/layoutAcces";
import React from "react";
import "../../globals.css";
import FormLogin from "@/components/access/form-login/FormLogin";

const login = () => {
  return (
    <LayoutAcces>
      <FormLogin />
    </LayoutAcces>
  );
};

export default login;
