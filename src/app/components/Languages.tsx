import { FC } from "react";
import { GithubRepo } from "@/app/types/github";

type Props = {
  repos: GithubRepo[];
};

const Languages: FC<Props> = ({ repos }) => {
  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  const total = Object.values(languages).reduce((a, b) => a + b, 0);

  const languagesPercent = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [lang, count]) => {
      acc[lang] = ((count / total) * 100).toFixed(1);
      return acc;
    }, {} as { [key: string]: string });

  if (repos.length === 0) {
    return null;
  }
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Languages Used in Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(languagesPercent).map(([lang, percent]) => (
          <div key={lang} className="flex items-center justify-start">
            <span className="w-1/2 lg:w-1/3">{lang}</span>
            <div className="w-1/2 lg:w-full bg-gray-200 h-4 rounded">
              <div
                className="bg-blue-500 h-4 rounded"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            <span className="ml-2 min-w-10">{percent}%</span>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default Languages;
