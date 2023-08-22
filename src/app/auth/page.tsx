"use client";
import React, { useState } from "react";
import LoginForm from "../component/login/user/LoginForm";
import RegisterForm from "../component/login/user/RegisterForm";
import { activeFormState } from "@/service/recoil";
import { useRecoilValue } from "recoil";

const auth = () => {
  const formState = useRecoilValue(activeFormState);

  return (
    <div>
      {formState === "login" && <LoginForm />}
      {formState === "register" && <RegisterForm />}
    </div>
  );
};

export default auth;
