export default function RepositoryCard({ repo }: { repo: any }) {
  return (

<div className="p-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
    <div className="h-full w-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden hover:border-gray-800 transition duration-200 ease-in cursor-pointer">
        <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:text-blue-700 hover:underline">{repo.name}</h1>
            <p className="leading-relaxed mb-3">{repo.description}</p>
          
        </div>
    </div>
</div>

  );
}
