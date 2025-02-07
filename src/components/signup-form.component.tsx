"use client";

import Link from "next/link";
import { useState } from "react";
import { RiFacebookFill, RiGithubFill, RiGoogleFill } from "@remixicon/react";
import { Button } from "./ui/button";

interface SignupFormProps {
  children?: React.ReactNode;
}

export function SignupForm({ children }: SignupFormProps) {
  const [fieldEmpty, setFieldEmpty] = useState({
    firstname: true,
    lastname: true,
    email: true,
    password: true,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFieldEmpty((prevState) => ({
      ...prevState,
      [id]: value.trim() === "",
    }));
  };
  return (
    <form action="#" method="post">
      <div
        className={`form-group__ first__ ${
          !fieldEmpty.firstname ? "field--not-empty__" : ""
        }`}
      >
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          className="form-control__"
          id="firstname"
          onChange={handleInputChange}
        />
      </div>

      <div
        className={`form-group__ ${
          !fieldEmpty.lastname ? "field--not-empty__" : ""
        }`}
      >
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          className="form-control__"
          id="lastname"
          onChange={handleInputChange}
        />
      </div>

      <div
        className={`form-group__ ${
          !fieldEmpty.email ? "field--not-empty__" : ""
        }`}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control__"
          id="email"
          onChange={handleInputChange}
        />
      </div>

      <div
        className={`form-group__ last__ mb-6 ${
          !fieldEmpty.password ? "field--not-empty__" : ""
        }`}
      >
        <label htmlFor="password">Mot de Passe</label>
        <input
          type="password"
          className="form-control__"
          id="password"
          onChange={handleInputChange}
        />
      </div>

      <div className="hidden py-6 items-center justify-center">
        <label
          className="controoool__ flex justify-center items-center gap-1 cursor-pointer text-sm"
          htmlFor="remember-me-check"
        >
          <input
            type="checkbox"
            className="custom-checkbox"
            id="remember-me-check"
          />
          <span className="text-[#888]">Se Souvenir de Moi</span>
        </label>
        <span className="ml-auto">
          <Link
            href="#"
            className="forgot-pass__ text-[#888] text-sm underline hover:no-underline"
          >
            Mot de Passe Oublié
          </Link>
        </span>
      </div>

      <Button className="w-full mt-6">Créer Un Compte</Button>

      <span className="bloc hidden text-left py-6 text-[#495057]">
        — ou se connecter avec —
      </span>

      <div className="social-logi hidden">
        <Link href="#" className="facebook">
          <RiGoogleFill
            className="bg-[#ea4335] social-login-svg"
            size={50}
            color="white"
          />
        </Link>
        <Link href="#" className="twitter">
          <RiGithubFill
            className="bg-black social-login-svg"
            size={50}
            color="white"
          />
        </Link>
        {/* <Link href="#" className="google">
          <RiFacebookFill
            className="bg-[#3b5998] social-login-svg"
            size={50}
            color="white"
          />
        </Link> */}
      </div>

      <div>
        <p className="block text-left py-6 text-[#495057]">
          Vous avez déjà un compte?
          <Link
            href={"/login"}
            className="underline hover:no-underline text-primary"
          >
            {" "}
            Connectez-vous ici
          </Link>
        </p>
      </div>
    </form>
  );
}
