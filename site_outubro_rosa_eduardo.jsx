// App.jsx
// Projeto: Site informativo - Outubro Rosa
// Instruções abaixo mostram como criar o projeto (Vite + React + Tailwind) e como publicar.

import React from 'react'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-pink-600">Outubro Rosa — Informação e Prevenção</h1>
        <nav className="hidden md:flex gap-4 text-sm">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#sintomas" className="hover:underline">Sintomas</a>
          <a href="#prevencao" className="hover:underline">Prevenção</a>
          <a href="#autoexame" className="hover:underline">Autoexame</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="bg-white rounded-2xl shadow p-6 md:flex gap-6 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-pink-600">Juntas somos mais fortes</h2>
            <p className="mt-3 text-sm text-gray-600">Informações claras sobre sinais, prevenção e onde buscar ajuda. Faça o autoexame mensalmente e promova a conscientização.</p>

            <div className="mt-5 flex gap-3">
              <a href="#autoexame" className="px-4 py-2 rounded-full bg-pink-600 text-white font-semibold text-sm">Como fazer o autoexame</a>
              <a href="#prevencao" className="px-4 py-2 rounded-full border border-pink-200 text-pink-600 font-semibold text-sm">Dicas de prevenção</a>
            </div>
          </div>

          <div className="w-40 h-40 md:w-56 md:h-56 bg-pink-100 rounded-xl flex items-center justify-center">
            {/* Placeholder para imagem — troque pelo logo ou foto apropriada */}
            <span className="text-pink-600 font-bold">🎗️</span>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mt-8 bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">O que é câncer de mama?</h3>
          <p className="mt-3 text-gray-700">Câncer de mama é um crescimento descontrolado de células na mama. Pode afetar pessoas de qualquer gênero, mas é mais comum em mulheres. O diagnóstico precoce aumenta muito as chances de tratamento bem-sucedido.</p>
        </section>

        {/* Sintomas */}
        <section id="sintomas" className="mt-6 bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">Sinais e sintomas</h3>
          <ul className="mt-3 grid gap-2 md:grid-cols-2">
            <li className="p-3 border rounded">Nódulo ou caroço na mama</li>
            <li className="p-3 border rounded">Alterações no formato ou tamanho</li>
            <li className="p-3 border rounded">Secreção anormal pelo mamilo</li>
            <li className="p-3 border rounded">Vermelhidão, retração da pele ou do mamilo</li>
            <li className="p-3 border rounded">Dor persistente na região</li>
            <li className="p-3 border rounded">Inchaço em parte da mama</li>
          </ul>
        </section>

        {/* Prevenção */}
        <section id="prevencao" className="mt-6 bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">Prevenção e rastreamento</h3>
          <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
            <li>Pratique atividade física regularmente e mantenha peso saudável.</li>
            <li>Alimente-se de forma equilibrada e evite excesso de álcool.</li>
            <li>Realize mamografias conforme orientação médica (geralmente a partir dos 40 anos — siga as diretrizes locais).</li>
            <li>Conheça o seu corpo e realize o autoexame mensalmente.</li>
            <li>Procure atendimento médico ao notar alterações.</li>
          </ol>
        </section>

        {/* Autoexame */}
        <section id="autoexame" className="mt-6 bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">Como fazer o autoexame (passo a passo)</h3>
          <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-3">
            <li>Fique em frente ao espelho com os ombros retos e os braços nas laterais. Observe alterações visíveis.</li>
            <li>Levante um braço e, com os dedos retos e juntos, faça pressão circular cobrindo toda a mama e a região até a axila.</li>
            <li>Repita no outro lado. Procure por caroços, espessamentos ou áreas endurecidas.</li>
            <li>Deite e repita a palpação — isto achata a mama contra o tórax e facilita sentir alterações.</li>
            <li>Verifique se há secreção saindo do mamilo pressionando suavemente.</li>
            <li>Se notar algo diferente, marque uma consulta com seu médico. Não entre em pânico — muitas alterações não são câncer, mas merecem avaliação.</li>
          </ol>
        </section>

        {/* Recursos e links */}
        <section className="mt-6 bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">Onde buscar ajuda</h3>
          <p className="mt-3 text-gray-700">No Brasil, procure postos de saúde (SUS) para encaminhamento; clínicas privadas também realizam exames. Seguem formas práticas:</p>
          <ul className="mt-3 list-disc list-inside text-gray-700">
            <li>Agende mamografia em redes públicas ou clínicas conveniadas.</li>
            <li>Procure ONGs locais que fazem campanhas de conscientização em Outubro.</li>
            <li>Em caso de emergência ou dúvidas, consulte um médico de confiança.</li>
          </ul>
        </section>

        {/* Contato simples - Formulário (sem backend). Mostramos como conectar ao Formspree ou usar mailto */}
        <section id="contato" className="mt-6 bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-bold text-pink-600">Fale conosco</h3>
          <p className="mt-2 text-sm text-gray-600">Formulário de exemplo (funcionamento via Formspree ou por e-mail).</p>

          <form className="mt-4 grid gap-3" action="https://formspree.io/f/{SEU_ID}" method="POST">
            <input name="name" required placeholder="Seu nome" className="p-3 border rounded" />
            <input name="email" type="email" required placeholder="Seu e‑mail" className="p-3 border rounded" />
            <textarea name="message" required placeholder="Mensagem" className="p-3 border rounded h-24" />
            <div className="flex gap-3">
              <button type="submit" className="px-4 py-2 rounded bg-pink-600 text-white font-semibold">Enviar</button>
              <a className="px-4 py-2 rounded border" href="mailto:seu@email.com">Enviar por e‑mail</a>
            </div>
          </form>
        </section>

        <footer className="mt-8 text-center text-xs text-gray-500">Feito para escola • Outubro Rosa • Informação não substitui consulta médica</footer>

      </main>
    </div>
  )
}

/*
PASSO A PASSO para criar o projeto (comandos):

1) Crie o projeto com Vite + React:
   npm create vite@latest meu-outubro-rosa -- --template react
   cd meu-outubro-rosa

2) Instale dependências e Tailwind CSS:
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

3) Configure Tailwind (tailwind.config.js):
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   }

4) No src/index.css (ou src/styles.css) adicione:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

5) Substitua o conteúdo de src/App.jsx pelo código acima. Importe o CSS em src/main.jsx:
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import './index.css'
   import App from './App'

   ReactDOM.createRoot(document.getElementById('root')).render(<App />)

6) Rodar em desenvolvimento:
   npm run dev

7) Criar build:
   npm run build

8) Publicar: usar Vercel (a forma mais simples) ou Netlify / GitHub Pages.
   - Vercel: conectar repositório GitHub e deploy automático.
   - Netlify: arrastar o build ou conectar repo.
   - GitHub Pages: usar action para publicar pasta /build.

Personalizações possíveis:
- Substitua o ícone/emoji por uma imagem real (coloque em /public e referencie).
- Adicione seção de estatísticas reais (busque dados do Ministério da Saúde ou IBGE se precisar).
- Troque o formulário do Formspree pelo seu endpoint de backend se tiver.
- Traduza textos para outro idioma se for preciso.

Observações de acessibilidade e boas práticas:
- Use contraste adequado (verifique acessibilidade). O rosa + fundo claro aqui foi escolhido para ser legível.
- Sempre inclua texto alternativo para imagens.
- Marque os títulos com tags semânticas (h1,h2,h3) — feito no componente.

*/
