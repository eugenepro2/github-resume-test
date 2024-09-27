import { notFound } from "next/navigation";
import Link from "next/link";
import { FC } from "react";
import { GithubRepo, GithubUser } from "@/app/types/github";
import RepoTable from "../components/RepoTable";
import UserInfo from "../components/UserInfo";
import Languages from "../components/Languages";

const getData = async (username: string) => {
  try {
    const headers = {
      Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
    };

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 60 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers,
        next: { revalidate: 60 },
      }),
    ]);

    if (userRes.status === 404) {
      notFound();
    }

    if (!userRes.ok || !reposRes.ok) {
      throw Error("Some error occurred");
    }

    const user: GithubUser = await userRes.json();

    const repos: GithubRepo[] = await reposRes.json();

    return {
      user,
      repos,
    };
  } catch (error) {
    throw error;
  }
};

type Props = {
  params: { username: string };
};

const ResumePage: FC<Props> = async ({ params }) => {
  const { username } = params;
  const { repos, user } = await getData(username);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Link href="/" className="text-blue-500 hover:underline cursor-pointer">
          ← Back to Home
        </Link>
      </div>
      <div className="bg-white p-4 rounded shadow-lg border gap-10 flex flex-col">
        <UserInfo {...{ user }} />

        <Languages {...{ repos }} />

        <RepoTable {...{ repos }} />
      </div>
    </div>
  );
};
export default ResumePage;
