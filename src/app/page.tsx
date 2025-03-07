"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { getLinks, createLink } from "@/services/apiService";
import Image from "next/image";
import Cookies from "js-cookie";

type Link = {
  id: number;
  short_url: string;
  original_url: string;
  clicks: number;
};

export default function Home() {
  const [linksData, setLinksData] = useState<Link[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [originalUrl, setOriginalUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ originalUrl?: string; customAlias?: string }>({});


  useEffect(() => {
    const fetchLinks = async () => {
      const userId = Cookies.get("userId");
      if (!userId) {
        setErrorMessage("ID não encontrado no cookie");
        return;
      }

      try {
        const data = await getLinks(userId);
        if (data) setLinksData(data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API", error);
      }
    };

    fetchLinks();
  }, []);

  const handleCreateLink = async () => {
    const userId = Cookies.get("userId");
    if (!userId) {
      setErrorMessage("ID não encontrado no cookie");
      return;
    }

    // Validação dos campos
    const newErrors: { originalUrl?: string; customAlias?: string } = {};
    if (!originalUrl) newErrors.originalUrl = "O campo Link Original é obrigatório.";
    if (!customAlias) newErrors.customAlias = "O campo Link Encurtado é obrigatório.";
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // Se houver erros, interrompe a execução

    try {
      setLoading(true);
      const newLink = await createLink(originalUrl, customAlias, userId);
      const formattedLink = { ...newLink, id: Number(newLink.id) };

      setLinksData((prev) => [formattedLink, ...prev]);
      setOriginalUrl("");
      setCustomAlias("");
      setErrors({});
    } catch (error) {
      console.error("Erro ao criar link:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* {errorMessage && (
        <div className="text-red-500 text-center my-4">
          <p>{errorMessage}</p>
        </div>
      )} */}

      <div className="flex flex-col items-center w-full mt-12 md:mt-20 lg:mt-24">
        <div className="mb-6">
          <Image src="icons/Logo.svg" width={140} height={140} alt="CV" />
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-4 px-4 w-full">
          <div className="bg-gray-100 border border-gray-100 rounded-2xl shadow-lg p-6 md:p-10 max-w-lg w-full sm:w-3/4 lg:w-1/2 flex flex-col items-center text-center">
            <p className="text-xl md:text-xl font-bold text-black">Novo Link</p>

            {/* Campo LINK ORIGINAL */}
            <div className="w-full text-left mt-4">
              <label
                className={`block font-small mb-2 ${errors.originalUrl ? "text-red-500" : "text-gray-500"}`}
                htmlFor="originalUrl"
              >
                LINK ORIGINAL
              </label>
              <input
                type="text"
                id="originalUrl"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                placeholder="www.exemplo.com.br"
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.originalUrl ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-gray-200"
                }`}
              />
              {errors.originalUrl && <p className="flex gap-x-1 text-red-500 text-sm mt-1"><Image src="icons/Warning.svg" width={20} height={20} alt="CV" /> <p className="mt-1">{errors.originalUrl}</p></p>}
            </div>

            {/* Campo LINK ENCURTADO */}
            <div className="w-full text-left mt-4">
              <label
                className={`block font-small mb-2 ${errors.customAlias ? "text-red-500" : "text-gray-500"}`}
                htmlFor="customAlias"
              >
                LINK ENCURTADO
              </label>
              <input
                type="text"
                id="customAlias"
                value={customAlias}
                onChange={(e) => setCustomAlias(e.target.value)}
                placeholder="brev.ly/"
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.customAlias ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-gray-200"
                }`}
              />
              {errors.customAlias && <p className="flex gap-x-1 text-red-500 text-sm mt-1"><Image src="icons/Warning.svg" width={20} height={20} alt="CV" /> <p className="mt-1">{errors.customAlias}</p></p>}
            </div>

            <button
              className="w-full mt-6 p-3 text-white font-medium rounded-md bg-[#2C46B1] hover:bg-[#2C4091] cursor-pointer"
              onClick={handleCreateLink}
              disabled={loading}
            >
              {loading ? "Salvando..." : "Salvar link"}
            </button>
          </div>

          <div className="bg-gray-100 border border-gray-300 rounded-2xl shadow-lg px-6 py-8 md:p-12 w-full sm:w-3/4 lg:w-1/3 flex flex-col items-center text-center">
            <div className="flex justify-between items-center w-full">
              <p className="text-xl md:text-xl font-bold text-black">Meus Links</p>
              <button className="flex gap-2 px-3 py-2 font-medium rounded-md bg-[#CDCFD5] hover:bg-[#74798B] cursor-pointer text-black">
                <Image src="icons/Vector.svg" width={16} height={20} alt="CV" />
                Baixar CSV
              </button>
            </div>

            <div className="w-full border-t border-gray-300 my-4"></div>

            <div className="overflow-x-auto w-full">
              <table className="min-w-full table-auto border-collapse">
                <tbody>
                  {linksData.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="text-center text-gray-500 py-8">
                        <Image src="icons/Link.svg" width={42} height={20} alt="CV" />
                        <p>AINDA NÃO EXISTE LINKS CADASTRADOS.</p>
                      </td>
                    </tr>
                  ) : (
                    linksData.map((link) => (
                      <tr key={link.id} className="border-b border-gray-300 hover:bg-gray-50">
                        <td className="text-left">
                          <div className="text-xl font-bold text-blue-600 hover:text-blue-700">{link.short_url}</div>
                          <p className="text-sm text-gray-500">{link.original_url}</p>
                        </td>
                        <td className="p-4 text-left">{link.clicks} acessos</td>
                        <td className="flex p-4 space-x-2">
                          <button
                            className="p-2 text-white bg-[#CDCFD5] rounded-md hover:bg-[#74798B] cursor-pointer"
                            onClick={() => alert(`Editando ${link.id}`)}
                          >
                            <Image src="icons/Copy.svg" width={22} height={20} alt="CV" className="text-gray-400" />
                          </button>
                          <button
                            className="p-2 text-white bg-[#CDCFD5] rounded-md hover:bg-[#74798B] cursor-pointer"
                            onClick={() => alert(`Excluindo ${link.id}`)}
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
      </div>

      <ThemeToggle />
    </div>
  );
}
