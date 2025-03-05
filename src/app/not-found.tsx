export default function NotFound() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 text-center px-4">
      <div className="bg-gray-100 border border-gray-100 rounded-2xl shadow-lg p-8 md:p-12 max-w-lg w-full sm:w-3/4 lg:w-1/2">
        <h1 className="text-6xl md:text-7xl font-bold text-red-600">404</h1>
        <p className="text-2xl md:text-3xl mt-6 font-bold">Link/Página não encontrada</p>
        <p className="mt-6  hover:underline text-lg md:text-sm block">
          O link que você está tentando acessar não existe, foi removido ou é uma URL inválida. Saiba mais em brev.ly.
        </p>
      </div>
    </div>    
    );
  }
  