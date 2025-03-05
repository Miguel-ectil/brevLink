import Image from "next/image";

export default function NotFound() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4">
      <div className="bg-gray-100 border border-gray-300 rounded-2xl shadow-lg p-8 md:p-12 max-w-lg w-full sm:w-3/4 lg:w-1/2 flex flex-col items-center text-center">
        <Image src="/images/404.svg" alt="Ícone not found" width={180} height={240} className="mx-auto" />
        <p className="text-1xl md:text-2xl mt-6 font-bold">Link/Página não encontrada</p>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-md">
          O link que você está tentando acessar não existe, foi removido ou é uma URL inválida. Saiba mais em <a href="https://brev.ly" className="text-blue-500 hover:underline">brev.ly</a>.
        </p>
      </div>
    </div>    
  );
}
  