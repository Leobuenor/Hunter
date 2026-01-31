import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Cabeçalho */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                🎯 Hunter
              </h1>
              <p className="text-gray-600 mt-2">
                Gerencie suas candidaturas de emprego como um profissional
              </p>
            </div>
            <div className="space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                Entrar
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Acompanhe suas candidaturas em um só lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dashboard inteligente, recomendações personalizadas e insights 
            para aumentar suas chances de contratação.
          </p>
        </div>

        {/* Cards de Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Dashboard Inteligente</h3>
            <p className="text-gray-600">
              Visualize seu progresso com gráficos e métricas em tempo real.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-green-600 text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Recomendações</h3>
            <p className="text-gray-600">
              Receba sugestões de vagas e tecnologias para estudar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-purple-600 text-4xl mb-4">🔔</div>
            <h3 className="text-xl font-bold mb-3">Notificações</h3>
            <p className="text-gray-600">
              Lembretes automáticos para entrevistas e prazos importantes.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Começar Agora
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-gray-500 mt-4">
            É grátis! Não precisa de cartão de crédito.
          </p>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              Projeto desenvolvido para portfólio por um desenvolvedor júnior 💻
            </p>
            <p className="text-gray-500 text-sm mt-2">
              React • Node.js • TypeScript • PostgreSQL • Graph
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Bem-vindo de volta!
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<div className="p-8">Página de Registro - Em breve!</div>} />
      </Routes>
    </Router>
  );
}

export default App;