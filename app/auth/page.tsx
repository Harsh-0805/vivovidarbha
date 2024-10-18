"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import google from "@/public/assets/google.png";
import vivo from "@/public/assets/vivo.png";

const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-[90%] sm:max-w-[670px] w-full mx-4 sm:mx-[82px] my-[100px] sm:my-auto">
        <div className="flex justify-center mb-8">
          <Image
            src={vivo}
            alt="vivo logo"
            className="w-32"
            width={100}
            height={50}
          />
        </div>

        <h2 className="text-2xl font-vivoMedium text-center mb-6">
          Account sign-in
        </h2>

        <div className="flex justify-center mb-6">
          <button
            // onClick={handleGoogleSignIn}
            className="flex items-center px-4 py-2 bg-white border border-blue-600 hover:bg-blue-100 transition rounded-lg"
          >
            <Image
              src={google}
              alt="Google logo"
              className="w-6 h-6 mr-2"
              width={20}
              height={20}
            />
            Sign in with Google authorization
          </button>
        </div>

        <div className="text-center mt-6">
          <a href="#" className="text-sm text-gray-400 hover:underline">
            User Agreement and Privacy Statement
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
