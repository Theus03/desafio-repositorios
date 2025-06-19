export default function RepositoryCard({ repo }: { repo: any }) {
  return (

<div className="p-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
    <div className="h-full w-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden hover:border-gray-800 transition duration-200 ease-in cursor-pointer">
      <div className="p-2 flex">

      </div>
        <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:text-red-700 hover:underline">{repo.name}</h1>
            <p className="leading-relaxed mb-3">{repo.description}</p>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
                  Favoritar            
              </button>
              <button className="inline-flex items-center gap-2 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
                  Saiba Mais            
              </button>

            </div>
        </div>
    </div>
</div>

  );
}
