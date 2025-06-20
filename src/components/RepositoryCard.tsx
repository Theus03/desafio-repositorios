import { useMemo } from "react";

export default function RepositoryCard({ repo }: { repo: any }) {

  console.log(repo)

  const randomColor = useMemo(() => {
    const colors = [
      "#EF4444", // red-500
      "#F97316", // orange-500
      "#EAB308", // yellow-500
      "#10B981", // green-500
      "#3B82F6", // blue-500
      "#8B5CF6", // purple-500
      "#EC4899", // pink-500
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }, []);

  return (

    <div className="group h-48 w-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden hover:border-gray-800 transition duration-200 ease-in cursor-pointer">
      <div className="p-6 flex flex-col items-start justify-start gap-3">
        <div className="flex items-center justify-between w-full">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: randomColor }} viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M22 11V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11H22ZM22 9H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V9Z"></path>
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 text-white bg-gray-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          </div>
        </div>
        
        <h1 className="title-font text-lg font-medium text-gray-900 group-hover:underline group-hover:text-blue-600 transition">
          {repo?.name}
        </h1>
        <p
          className="text-start w-full pb-2 max-h-32 overflow-hidden group-hover:overflow-y-auto pr-2 scroll-smooth"
          title={repo.description ?? "Sem Descrição no Repositório..."}
        >
          {repo.description ?? "Sem Descrição no Repositório..."}
        </p>
      </div>
    </div>

  );
}
