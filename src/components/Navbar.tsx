export default function Navbar() {
    return (
         <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 justify-between items-center flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Meus Repositórios</span>
                    </a>
                   <div className="">
                        <input
                        type="text"
                        placeholder="Pesquise aqui por um repositório..."
                        className="w-96 h-12 text-base bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none text-gray-700 px-4 py-2 leading-6 transition duration-200"
                        />
                   </div>
                </div>
            </header>
         </div>
    )
}