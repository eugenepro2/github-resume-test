import { GithubUser } from "@/app/types/github";
import { FC } from "react";
import Image from "next/image";

type Props = {
  user: GithubUser;
};

const UserInfo: FC<Props> = ({ user }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Image
          src={user.avatar_url}
          alt={user.name}
          width={200}
          height={200}
          className="w-24 h-24 rounded-full"
        />
        <div className="gap-2">
          <h1 className="text-2xl font-bold">{user.name || user.login}</h1>
          <p className="text-gray-600">
            <a href={user.html_url} className="text-blue-500 hover:underline">
              @{user.login}{" "}
            </a>
            • Joined on
            {new Date(user.created_at).toLocaleDateString()}
          </p>
          <a href={user.blog} className="text-blue-500 hover:underline">
            {user.blog}
          </a>
          <p>Public repos: {user.public_repos}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default UserInfo;
