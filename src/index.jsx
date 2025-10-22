'use client'

import Link from 'next/link'; 
import { useState } from 'react';
import "./cssglobal.css"; 

const livrosPreview = [
  {
    id: 1,
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    categoria: 'Programação',
    descricao: 'Guia para escrever código limpo.',
    url: 'https://book.northwind.ir/bookfiles/clean-code-a-handbook-of-agile-software-craftsmanship/Clean.Code.A.Handbook.of.Agile.Software.Craftsmanship.pdf'
  },
  {
    id: 2,
    titulo: 'Introdução aos Estudos CTS',
    autor: 'Walter Antonio Bazzo',
    categoria: 'CTS',
    descricao: 'Introdução a disciplina de Ciência, Tecnologia e Sociedade.',
    url: 'https://wp.ufpel.edu.br/walter/files/2023/06/1__Introduo_aos_estudos_CTS_Bazzo_et_al.pdf'
  },
  {
    id: 3,
    titulo: 'Redes de Computadores',
    autor: 'Andrew S. Tanenbaum',
    categoria: 'Redes',
    descricao: 'Conceitos básicos de redes e protocolos.',
    url: 'https://www-usr.inf.ufsm.br/~rose/Tanenbaum.pdf'
  }
];

export default function Index() {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const abrirPDF = (caminho) => {
    window.open(caminho, "_blank");
  };

  const termoLower = termoPesquisa.toLowerCase();
  
  const livrosFiltrados = livrosPreview.filter(livro => {
    const tituloLower = livro.titulo.toLowerCase();
    const autorLower = livro.autor.toLowerCase();
    
    return tituloLower.includes(termoLower) || autorLower.includes(termoLower);
  });

  return (
    <main>
      <header>
        <h1>Biblioteca SI-FCI</h1>
        <p>Sistemas de Informação - Faculdade de Computação e Informática</p>
      </header>

      <nav>
        <Link href="/index.jsx">Início</Link>
        <Link href="/acervo">Acervo Completo</Link>
      </nav>

      <div className="barra-pesquisa">
        <input 
          type="text"placeholder="Pesquisar livro ou autor..." value={termoPesquisa} onChange={(e) => setTermoPesquisa(e.target.value)}
        />
      </div>

      <section id="acervo">
        <h2>Prévia</h2>
        <div className="livros-container">
          
          {livrosFiltrados.map(livro => (
            <article 
              key={livro.id}
              onClick={() => abrirPDF(livro.url)}
            >
              <h4>{livro.titulo}</h4>
              <div className="autor">{livro.autor}</div>
              <div className="categoria">{livro.categoria}</div>
              <p>{livro.descricao}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>Contato:</p>
        <p>Davi (10385766@mackenzista.com.br)</p>
        <p>Felipe (10735839@mackenzista.com.br)</p>
        <p>Eduardo (10723321@mackenzista.com.br)</p>
      </footer>
    </main>
  );
}