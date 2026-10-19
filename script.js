// Base de Dados dos Equipamentos para o Modal Interativo
const techData = {
  altair: {
    title: "Altair 8800 (1975)",
    subtitle: "MITS - Micro Instrumentation and Telemetry Systems",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    desc: "O Altair 8800 é amplamente considerado o catalisador da revolução dos microcomputadores pessoais. Ele utilizava a CPU Intel 8080 de 8 bits rodando a 2 MHz e vinha com apenas 256 bytes de memória RAM na sua configuração base.",
    specs: ["Processador: Intel 8080 @ 2 MHz", "Memória: 256 Bytes (expansível a 64KB)", "Entrada: Chaves no painel frontal", "Saída: Luzes LED (sem monitor inicial)"]
  },
  apple2: {
    title: "Apple II (1977)",
    subtitle: "Apple Computer Inc.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    desc: "Projetado por Steve Wozniak, o Apple II foi um dos primeiros computadores pessoais comercializados em massa com enorme sucesso. Vinha com gabinete plástico integrado, teclado, suporte a gráficos coloridos e linguagem BASIC embutida.",
    specs: ["Processador: MOS Technology 6502 @ 1.023 MHz", "Memória: 4 KB até 64 KB RAM", "Gráficos: NTSC Colorido (280x192)", "Armazenamento: Fita Cassete / Floppy Disk 5.25\""]
  },
  ibmpc: {
    title: "IBM PC - Modelo 5150 (1981)",
    subtitle: "International Business Machines",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    desc: "O lançamento do IBM PC definiu a arquitetura dos computadores pessoais corporativos até os dias de hoje. Ele popularizou o uso do sistema operacional MS-DOS da Microsoft e estabeleceu o padrão de mercado 'IBM-Compatível'.",
    specs: ["Processador: Intel 8088 @ 4.77 MHz", "Memória: 16 KB a 256 KB RAM", "Sistema Operacional: PC-DOS / MS-DOS 1.0", "Slots de Expansão: Bus ISA de 8 bits"]
  },
  macintosh: {
    title: "Apple Macintosh 128K (1984)",
    subtitle: "Apple Computer Inc.",
    img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    desc: "O Macintosh revolucionou a indústria ao trazer uma Interface Gráfica baseada em janelas e metáforas de 'área de trabalho' para o grande público, aliada ao uso do mouse de botão único.",
    specs: ["Processador: Motorola 68000 @ 7.83 MHz", "Memória: 128 KB RAM", "Tela: Integrada de 9\" P&B (512x342)", "Interface: GUI WYSIWYG com Mouse"]
  },
  mouse: {
    title: "O Mouse e Interfaces Gráficas",
    subtitle: "Pioneirismo Xerox PARC & Apple",
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    desc: "Apesar de inventado por Douglas Engelbart nos anos 60, foi no laboratório Xerox PARC nos anos 70 que o mouse foi integrado às telas WIMP (Windows, Icons, Menus, Pointer), sendo comercializado com sucesso no Macintosh.",
    specs: ["Tipo: Mecânico (esfera interna)", "Conexão: Serial / Proprietária", "Inovação: Apontar e Clicar sem comandos texto", "Uso: Navegação gráfica em área de trabalho"]
  },
  floppy: {
    title: "Disquetes (Floppy Disks)",
    subtitle: "IBM & Shugart Associates",
    img: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80",
    desc: "Os disquetes magnéticos flexíveis de 5.25 polegadas e posteriormente de 3.5 polegadas (envoltos em plástico rígido) foram os suportes universais para a distribuição de programas, jogos e arquivos na 4ª Geração.",
    specs: ["Formatos Comuns: 8\", 5.25\" e 3.5\"", "Capacidade: 360 KB até 1.44 MB", "Tipo: Armazenamento Magnético Removível", "Ícone Histórico: Virou o símbolo universal de 'Salvar'"]
  }
};

// Lista de Curiosidades para Sorteio
const curiosities = [
  "O famoso microprocessador Intel 4004 foi projetado originalmente para calcular operações de uma calculadora de mesa japonesa chamada Busicom, e não para um computador!",
  "A Microsoft (fundada por Bill Gates e Paul Allen em 1975) começou seu império escrevendo um interpretador da linguagem BASIC para o computador Altair 8800.",
  "Steve Wozniak vendeu sua calculadora científica HP e Steve Jobs vendeu sua Kombi Volkswagen para conseguir o capital inicial de $1.300 dólares para montar a Apple.",
  "O famoso comercial de lançamento do Apple Macintosh (1984) foi dirigido por Ridley Scott (diretor de Alien e Blade Runner) e transmitido durante o Super Bowl XVIII.",
  "A expressão 'Computador Pessoal' (PC) já existia antes, mas consagrou-se mundialmente após a revista TIME nomear o 'PC' como a 'Pessoa do Ano' em 1982."
];

// Funções do Modal
function openModal(key) {
  const data = techData[key];
  if (!data) return;

  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <div class="space-y-4">
      <img src="${data.img}" alt="${data.title}" class="w-full h-48 object-cover rounded-xl border border-gray-800">
      <div>
        <h3 class="text-2xl font-bold text-white">${data.title}</h3>
        <p class="text-xs text-amber-400 font-mono">${data.subtitle}</p>
      </div>
      <p class="text-gray-300 text-sm leading-relaxed">${data.desc}</p>
      <div class="bg-gray-800/80 p-4 rounded-xl border border-gray-700">
        <h4 class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">Especificações Técnicas:</h4>
        <ul class="text-xs font-mono text-gray-300 space-y-1">
          ${data.specs.map(spec => `<li>• ${spec}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  document.getElementById('tech-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('tech-modal').classList.add('hidden');
}

// Troca de Abas em Linguagens/Software
function switchTab(tab) {
  const langTab = document.getElementById('tab-lang');
  const soTab = document.getElementById('tab-so');
  const langBtn = document.getElementById('tab-lang-btn');
  const soBtn = document.getElementById('tab-so-btn');

  if (tab === 'lang') {
    langTab.classList.remove('hidden');
    soTab.classList.add('hidden');
    langBtn.className = "text-cyan-400 border-b-2 border-cyan-400 pb-2 font-bold focus:outline-none";
    soBtn.className = "text-gray-400 hover:text-white pb-2 font-bold focus:outline-none";
  } else {
    langTab.classList.add('hidden');
    soTab.classList.remove('hidden');
    soBtn.className = "text-cyan-400 border-b-2 border-cyan-400 pb-2 font-bold focus:outline-none";
    langBtn.className = "text-gray-400 hover:text-white pb-2 font-bold focus:outline-none";
  }
}

// Eventos Globais e Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Fechar ao clicar num link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Filtros da Galeria de Computadores
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.equip-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.className = "filter-btn px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700");
      btn.className = "filter-btn active px-4 py-2 rounded-full bg-cyan-500 text-black font-bold";

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Gerador de Curiosidades
  const curBtn = document.getElementById('next-curiosity-btn');
  const curText = document.getElementById('curiosity-text');

  if (curBtn && curText) {
    curBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * curiosities.length);
      curText.textContent = `"${curiosities[randomIndex]}"`;
    });
  }

  // Quiz Interativo
  const submitQuizBtn = document.getElementById('submit-quiz-btn');
  const quizResult = document.getElementById('quiz-result');

  if (submitQuizBtn) {
    submitQuizBtn.addEventListener('click', () => {
      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');

      if (!q1 || !q2) {
        alert("Por favor, responda a todas as perguntas do Quiz!");
        return;
      }

      let score = 0;
      if (q1.value === 'b') score++; // Intel 4004
      if (q2.value === 'c') score++; // VLSI / Microprocessadores

      quizResult.classList.remove('hidden');
      if (score === 2) {
        quizResult.innerHTML = `
          <p class="text-green-400 font-bold text-base mb-1"><i class="fas fa-check-circle"></i> Parabéns! Você acertou 2 de 2 perguntas!</p>
          <p class="text-xs text-gray-300">Você compreendeu perfeitamente os conceitos da 4ª Geração da Computação.</p>
        `;
      } else {
        quizResult.innerHTML = `
          <p class="text-amber-400 font-bold text-base mb-1"><i class="fas fa-exclamation-circle"></i> Você acertou ${score} de 2 perguntas.</p>
          <p class="text-xs text-gray-300">Dica: O Intel 4004 foi a primeira CPU num único chip e a tecnologia marcante é a integração VLSI!</p>
        `;
      }
    });
  }
});