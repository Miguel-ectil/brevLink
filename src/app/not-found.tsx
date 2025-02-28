export default function NotFound() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <p className="text-3xl mt-4 font-bold">Link/Página não encontrada</p>
        <a href="/" className="mt-6 text-blue-500 hover:underline">
          Voltar para a Home
        </a>
      </div>
    );
  }
  