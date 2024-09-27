import { FC } from "react";
import { GithubRepo } from "@/app/types/github";

type Props = {
  repos: GithubRepo[];
};

const RepoTable: FC<Props> = ({ repos }) => {
  const lastUpdatedRepos = repos
    .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
    .slice(0, 10);

  if (repos.length === 0) {
    return null;
  }
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Recently Updated Repositories</h2>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Repo Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Updated At
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {lastUpdatedRepos.map((repo) => (
            <tr key={repo.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {repo.name}
                </a>{" "}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {new Date(repo.updated_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RepoTable;
