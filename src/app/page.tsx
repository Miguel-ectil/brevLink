"use client"
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { getLinks } from "@/services/apiService"; // Importa a função que busca os links
import Image from "next/image";

type Link = {
  id: number;
  short_url: string;
  original_url: string;
  clicks: number;
};

export default function Home() {
  const [linksData, setLinksData] = useState<Link[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await getLinks(); // Agora usa a função getLinks para buscar os dados
        if (data) setLinksData(data);
        console.log('Olha os dados', data)
      } catch (error) {
        console.error("Erro ao buscar os dados da API", error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Título */}
      {/* <div>sdzfsfgsdgsd;f {linksData}</div> */}
      <div className="font-bold text-2xl md:text-3xl my-6 text-left pl-4">
        <Image src="icons/Logo.svg" width={120} height={120} alt="CV" />
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-4 px-4 w-full">

        {/* Card da Esquerda */}
        <div className="bg-gray-100 border border-gray-100 rounded-2xl shadow-lg p-6 md:p-10 max-w-lg w-full sm:w-3/4 lg:w-1/2 flex flex-col items-center text-center">
          <p className="text-xl md:text-xl font-bold text-black">Novo Link</p>

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
        <div className="bg-gray-100 border border-gray-300 rounded-2xl shadow-lg px-6 py-8 md:p-12 w-full sm:w-3/4 lg:w-1/3 flex flex-col items-center text-center">
          {/* Título com o botão ao lado */}
          <div className="flex justify-between items-center w-full">
            <p className="text-xl md:text-xl font-bold text-black">Meus Links</p>
            <button
              className="flex gap-2 px-3 py-2 font-medium rounded-md bg-[#CDCFD5] hover:bg-[#74798B] cursor-pointer text-black"
            >
              <Image src="icons/Vector.svg" width={16} height={20} alt="CV" />
              Baixar CSV
            </button>
          </div>

          {/* Linha separadora */}
          <div className="w-full border-t border-gray-300 my-4"></div>

          <div className="overflow-x-auto w-full"> {/* Torna a tabela rolável em telas pequenas */}
            <table className="min-w-full table-auto border-collapse">
              <tbody>
                {linksData.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="flex flex-col items-center justify-center text-gray-500 py-8">
                      <div className="mb-4">
                        <Image src="icons/Link.svg" width={42} height={20} alt="CV" className="text-gray-400" />
                      </div>
                      <p>AINDA NÃO EXISTE LINKS CADASTRADOS.</p>
                    </td>
                  </tr>
                ) : (
                  linksData.map((link) => (
                    <tr key={link.id} className="border-b border-gray-300 hover:bg-gray-50">
                      <td className="text-gray-600 text-left">
                        <div className="text-xl font-bold text-blue-600 hover:text-blue-700">{link.short_url}</div>
                        <p className="text-sm text-gray-500">{link.original_url}</p>
                      </td>
                      <td className="p-4 text-gray-600 text-left">{link.clicks} acessos</td>
                      <td className="flex py-4 space-x-2 justify-start">
                        <button
                          className="p-1.5 text-white bg-[#CDCFD5] rounded-md hover:bg-[#74798B]"
                          onClick={() => alert(`Editando ${link.id}`)}
                        >
                          <Image src="icons/Copy.svg" width={24} height={24} alt="CV" className="text-gray-400 " />
                        </button>
                        <button
                          className="p-1.5 text-white bg-[#CDCFD5] rounded-md hover:bg-[#74798B]"
                          onClick={() => alert(`Excluindo ${link.id}`)}
                        >
                          <Image src="icons/Trash.svg" width={24} height={24} alt="CV" className="text-gray-400 sm:w-6 sm:h-6" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>


        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
