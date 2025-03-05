import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center space-x-4 px-4">
      <div className="bg-gray-100 border border-gray-300 rounded-2xl shadow-lg p-6 md:p-10 max-w-lg w-full sm:w-3/4 lg:w-1/2 flex flex-col items-center text-center">
        <p className="text-xl md:text-2xl font-bold">Novo Link</p>
    
        {/* Primeiro Input */}
        <div className="w-full text-left mt-4">
          <label className="block text-gray-500 font-small mb-2" htmlFor="nome">
            LINK ORIGINAL
          </label>
          <input
            type="text"
            id="nome"
            placeholder="www.exemplo.com.br"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
    
        {/* Segundo Input */}
        <div className="w-full text-left mt-4">
          <label className="block text-gray-500 font-small mb-2" htmlFor="email">
          LINK ENCURTADO
          </label>
          <input
            type="email"
            id="email"
            placeholder="brev.ly/"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
    
        {/* Botão */}
        <button
          className="w-full mt-6 p-3 text-white font-medium rounded-md bg-[#2C46B1] hover:bg-[#2C4091] cursor-pointer"
        >
          Salvar link
        </button>
      </div>
  
      {/* Card da Direita (Menor) */}
      <div className="bg-gray-100 border border-gray-300 rounded-2xl shadow-lg p-8 md:p-12 w-full sm:w-3/4 lg:w-1/3 flex flex-col items-center text-center">
        <p className="text-2xl md:text-3xl mt-6 font-bold">Meus Links</p>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-md">
          O link que você está tentando acessar não existe, foi removido ou é uma URL inválida. Saiba mais em <a href="https://brev.ly" className="text-blue-500 hover:underline">brev.ly</a>.
        </p>
      </div>
      <ThemeToggle />
    </div>
  );
}
