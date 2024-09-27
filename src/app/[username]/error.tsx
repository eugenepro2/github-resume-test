"use client";

import Link from "next/link";
import { FC } from "react";

type Props = {
  error: {
    message: string;
  };
};

const Error: FC<Props> = ({ error }) => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Error</h1>
      <p>{error.message}</p>
      <Link href="/" className="text-blue-500 hover:underline cursor-pointer">
        Return to the home page
      </Link>
    </div>
  );
};

export default Error;
