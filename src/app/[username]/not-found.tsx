import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center flex flex-col gap-4">
      <h1 className="text-2xl font-bold ">User not found</h1>
      <p>Unfortunately, a user with that username was not found on GitHub.</p>
      <Link href="/" className="text-blue-500 hover:underline cursor-pointer">
        Return to the home page
      </Link>
    </div>
  );
};

export default NotFound;
