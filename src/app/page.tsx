"use client"
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get("https://api.exemplo.com/links"); // Substitua pela URL da sua API
        setLinksData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API", error);
      }
    };

    fetchLinks();
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Título */}
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

          <div className="">
            <table>
              {/* <thead>
            <tr>
              <th className="p-4 text-left">Links</th>
              <th className="p-4 text-left">Acessos</th>
              <th className="p-4 text-left">Ações</th>
            </tr>
          </thead> */}
              <tbody>
                {linksData.length === 0 ? (
                  <tr className="w-full ">
                    <td colSpan={3} className="flex flex-col items-center justify-center text-gray-500">
                      <div className="mb-4">
                        <Image src="icons/Link.svg" width={42} height={20} alt="CV" className="text-gray-400" />
                      </div>
                      <p>
                        AINDA NÃO EXISTE LINKS CADASTRADOS.
                      </p>
                    </td>
                  </tr>
                ) : (
                  linksData.map((link) => (
                    <tr key={link.id}>
                      <td className="p-4 text-gray-600">{link.url}</td>
                      <td className="p-4 text-gray-600">{link.acessos}</td>
                      <td className="flex p-4">
                        <button
                          className="mr-2 p-2 text-white bg-[#CDCFD5] rounded-md hover:bg-[#74798B]"
                          onClick={() => alert(`Editando ${link.url}`)}
                        >
                          <Image src="icons/Copy.svg" width={22} height={20} alt="CV" className="text-gray-400" />
                        </button>
                        <button
                          className="p-2 text-white bg-[#CDCFD5] rounded-md hover:bg-[#74798B]"
                          onClick={() => alert(`Excluindo ${link.url}`)}
                        >
                          <Image src="icons/Trash.svg" width={22} height={20} alt="CV" className="text-gray-400" />
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
