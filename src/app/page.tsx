import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Título */}
      {/* <div className="font-bold text-2xl md:text-3xl text-center my-6">
        Título
      </div> */}

      <div className="flex flex-col lg:flex-row items-start justify-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-4 px-4 w-full">
        {/* Card da Esquerda */}
        <div className="bg-gray-100 border border-gray-100 rounded-2xl shadow-lg p-6 md:p-10 max-w-lg w-full sm:w-3/4 lg:w-1/2 flex flex-col items-center text-center">
          <p className="text-xl md:text-xl font-bold">Novo Link</p>

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

        {/* Card da Direita */}
        <div className="bg-gray-100 border border-gray-300 rounded-2xl shadow-lg p-8 md:p-12 w-full sm:w-3/4 lg:w-1/3 flex flex-col items-center text-center">
          {/* Título com o botão ao lado */}
          <div className="flex justify-between items-center w-full">
            <p className="text-xl md:text-xl font-bold">Meus Links</p>
            <button
              className="p-3 text-white font-medium rounded-md bg-[#CDCFD5] hover:bg-[#E4E6EC] cursor-pointer"
            >
              Baixare CSV
            </button>
          </div>

          {/* Linha separadora */}
          <div className="w-full border-t border-gray-300 my-4"></div>

          {/* Lista de Links */}
          <ul className="w-full space-y-2">
            <li className="text-gray-600">Link 1: www.exemplo1.com</li>
            <li className="text-gray-600">Link 2: www.exemplo2.com</li>
            <li className="text-gray-600">Link 3: www.exemplo3.com</li>
          </ul>

          {/* Botão de Salvar link */}
          <button
            className="w-full mt-6 p-3 text-white font-medium rounded-md bg-[#CDCFD5] hover:bg-[#E4E6EC] cursor-pointer"
          >
            Salvar link
          </button>
        </div>
      </div>
      {/* Toggle de Tema */}
      <ThemeToggle />
    </div>
  );
}
