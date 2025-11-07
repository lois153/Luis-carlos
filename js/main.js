// JS inicial para a estrutura base
document.addEventListener('DOMContentLoaded', () => {
  console.log('Site base carregado');
});

// Array de músicas (cada objeto tem: titulo, artista, capaUrl)
const musicas = [
  {
    titulo: 'Caminho das Águas',
    artista: 'Banda Exemplo',
    capaUrl: 'https://via.placeholder.com/300/1DB954/ffffff?text=Capa+1'
  },
  {
    titulo: 'Noite Sem Fim',
    artista: 'Artista Fictício',
    capaUrl: 'https://via.placeholder.com/300/333333/ffffff?text=Capa+2'
  },
  {
    titulo: 'Sol da Manhã',
    artista: 'Projeto Demo',
    capaUrl: 'https://via.placeholder.com/300/222222/ffffff?text=Capa+3'
  }
];

// Exponha para uso no console ou por outros scripts
window.musicas = musicas;

// Exemplo rápido para desenvolvimento: logue as músicas
console.log('musicas:', musicas);

/**
 * Renderiza o array `musicas` dentro da div com id `lista-de-musicas`.
 * Cada item gera um elemento `.musica-card` compatível com o CSS existente.
 */
function renderMusicas() {
  const container = document.getElementById('lista-de-musicas');
  if (!container) {
    console.warn('Elemento #lista-de-musicas não encontrado.');
    return;
  }

  // Limpa conteúdo atual
  container.innerHTML = '';

  musicas.forEach((m, idx) => {
    const article = document.createElement('article');
    article.className = 'musica-card';
    article.setAttribute('role', 'article');
    article.setAttribute('aria-label', `Música ${m.titulo} — ${m.artista}`);

    const img = document.createElement('img');
    img.className = 'cover';
    img.src = m.capaUrl;
    img.alt = `Capa de ${m.titulo}`;

    const info = document.createElement('div');
    info.className = 'info';

    const h3 = document.createElement('h3');
    h3.textContent = m.titulo;

    const p = document.createElement('p');
    p.className = 'artist';
    p.textContent = m.artista;

    info.appendChild(h3);
    info.appendChild(p);

    const btn = document.createElement('button');
    btn.className = 'play';
    btn.type = 'button';
    btn.setAttribute('aria-label', `Tocar ${m.titulo}`);
    btn.innerHTML = '▶';

    // Handler de exemplo: apenas loga e alterna estado visual
    btn.addEventListener('click', () => {
      console.log(`Tocar: ${m.titulo} — ${m.artista}`);
      // Alterna atributo aria-pressed para acessibilidade
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      btn.classList.toggle('playing', !pressed);
    });

    article.appendChild(img);
    article.appendChild(info);
    article.appendChild(btn);

    container.appendChild(article);
  });
}

// Renderiza automaticamente quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  renderMusicas();
});

// Exponha para testes interativos
window.renderMusicas = renderMusicas;
