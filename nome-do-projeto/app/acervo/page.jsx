'use client'

import Link from 'next/link';
import { useState } from 'react';

const livros = [
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
    titulo: 'Redes de Computadores',
    autor: 'Andrew S. Tanenbaum',
    categoria: 'Redes',
    descricao: 'Conceitos básicos de redes e protocolos.',
    url: 'https://www-usr.inf.ufsm.br/~rose/Tanenbaum.pdf'
  },
  {
    id: 3,
    titulo: 'Introdução aos Estudos CTS',
    autor: 'Walter Antonio Bazzo',
    categoria: 'CTS',
    descricao: 'Introdução a disciplina de Ciência, Tecnologia e Sociedade.',
    url: 'https://wp.ufpel.edu.br/walter/files/2023/06/1__Introduo_aos_estudos_CTS_Bazzo_et_al.pdf'
  },
  {
    id: 4,
    titulo: 'Banco de Dados: Sistema de Gerenciamento',
    autor: 'Elmasri & Navathe',
    categoria: 'Banco de Dados',
    descricao: 'Conceitos de modelagem e SQL.',
    url: 'https://tonysoftwares.com.br/attachments/article/5297/Sistema_de_banco_de_dados_Navathe.pdf'
  },
  {
    id: 5,
    titulo: 'Modern Operating Systems',
    autor: 'Andrew S. Tanenbaum',
    categoria: 'Sistemas Operacionais',
    descricao: 'Arquitetura de sistemas operacionais modernos.',
    url: 'https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf'
  }
];

const categorias = [
  'Todos',
  'Programação',
  'Redes',
  'CTS',
  'Banco de Dados',
  'Sistemas Operacionais'
];

export default function Main() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  const abrirPDF = (caminho) => {
    window.open(caminho, "_blank");
  };

  const handleFiltroClick = (categoria) => {
    setFiltroAtivo(categoria);
  };

  const livrosFiltrados = livros.filter(livro => {
    if (filtroAtivo === 'Todos') {
      return true;
    }
    return livro.categoria === filtroAtivo; 
  });

  return (
    <main>
      <header>
        <h1>Acervo Completo</h1>
        <p>Biblioteca SI-FCI</p>
      </header>

      <nav>
        <Link href="/index.jsx">Início</Link>
        <Link href="/acervo.jsx">Prévia do acervo</Link>
      </nav>

      <div className="filtros">
        <div className="filtros">
          {categorias.map(categoria => (
            <span
              key={categoria}
              className={`filtro ${categoria === filtroAtivo ? 'ativo' : ''}`}
              onClick={() => handleFiltroClick(categoria)}
              data-categoria={categoria === 'Todos' ? 'todos' : undefined}
            >
              {categoria}
            </span>
          ))}
        </div>
      </div> 

      <section id="acervo">
        <h2>Lista de Livros</h2>
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