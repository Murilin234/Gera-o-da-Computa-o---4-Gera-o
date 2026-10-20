// Base de Dados dos Equipamentos para o Modal Interativo
const techData = {
  pc5150: {
    title: "PC 5150 (1981)",
    subtitle: "IBM - Nova York",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    desc: "A IBM anuncia em Nova York o lançamento do pc 5150, antecessor de todos os micros que hoje dominam o mercado mundial.",
    specs: ["Memória: 64 quilobytes", "Velocidade: 4,77 megahertz", "Sistemas: MS DOS / PC DOS"]
  },
  alphadec: {
    title: "Alpha DEC (1992)",
    subtitle: "Digital Equipment Corporation",
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    desc: "A DEC criou o revolucionário Alpha, uma máquina de 64 bits com arquitetura verdadeiramente RISC - conjunto reduzido de instruções com a finalidade de agilizar o processamento.",
    specs: ["Arquitetura: RISC 64-bit", "Objetivo: Agilizar o processamento", "Evolução: Superou as máquinas de 8, 16 e 32 bits"]
  },
  pentium: {
    title: "Processador Pentium (1993)",
    subtitle: "Intel Corporation",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    desc: "Processador Pentium da Intel com alta capacidade de processamento para micros pessoais.",
    specs: ["Transistores: 3,1 milhões", "Velocidade: 66 megahertz", "Fabricante: Intel"]
  }
};

// Lista de Curiosidades dos Prints
const curiosities = [
  "Em 1989, Tim Berners-Lee criou o Lynx, o primeiro browser para leitura de hipertexto na WWW que não exibia nenhuma imagem!",
  "A Microsoft vendeu 1 milhão de cópias do Windows em apenas dois anos após o lançamento em 1985.",
  "O finlandês Linus Torvalds liberou totalmente o código-fonte do Linux em 1991 para que qualquer programador pudesse modificá-lo.",
  "Até 1992 os computadores pessoais eram de no máximo 32 bits, até a chegada do Alpha DEC de 64 bits.",
  "O NCSA Mosaic (1993) foi o primeiro programa de navegação capaz de exibir imagens integradas no texto."
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

// Inicialização dos Eventos
document.addEventListener('DOMContentLoaded', () => {
  // Toggle Menu Mobile
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Gerador de Curiosidades
  const curBtn = document.getElementById('next-curiosity-btn');
  const curText = document.getElementById('curiosity-text');

  if (curBtn && curText) {
    curBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * curiosities.length);
      curText.textContent = `"${curiosities[randomIndex]}"`;
    });
  }

  // Lógica do Quiz Interativo Ampliado (10 Perguntas)
  const submitQuizBtn = document.getElementById('submit-quiz-btn');
  const quizResult = document.getElementById('quiz-result');

  if (submitQuizBtn) {
    submitQuizBtn.addEventListener('click', () => {
      // Gabarito correto das 10 questões
      const correctAnswers = {
        q1: 'b', // 4,77 MHz
        q2: 'a', // Circuitos Integrados em Larga Escala de Integração
        q3: 'b', // Bjarne Stroustrup
        q4: 'b', // Licença GPL / Software Livre
        q5: 'b', // Lynx
        q6: 'a', // Linus Torvalds
        q7: 'b', // 64 bits RISC
        q8: 'b', // 3,1 milhões de transistores
        q9: 'a', // Exibir imagens junto com textos
        q10: 'b' // Multimídia e CD-ROM
      };

      let score = 0;
      let totalQuestions = 10;
      let unanswered = false;

      for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
          unanswered = true;
          break;
        }
        if (selected.value === correctAnswers[`q${i}`]) {
          score++;
        }
      }

      if (unanswered) {
        alert("Por favor, responda a todas as 10 perguntas antes de verificar o resultado!");
        return;
      }

      quizResult.classList.remove('hidden');
      const percentage = Math.round((score / totalQuestions) * 100);

      if (score >= 8) {
        quizResult.innerHTML = `
          <p class="text-green-400 font-bold text-lg mb-1"><i class="fas fa-trophy"></i> Excelente! Você acertou ${score} de 10 perguntas (${percentage}%)!</p>
          <p class="text-xs text-gray-300">Você dominou perfeitamente todos os conceitos e acontecimentos da Quarta Geração da Computação.</p>
        `;
      } else if (score >= 5) {
        quizResult.innerHTML = `
          <p class="text-amber-400 font-bold text-lg mb-1"><i class="fas fa-check-circle"></i> Bom trabalho! Você acertou ${score} de 10 perguntas (${percentage}%).</p>
          <p class="text-xs text-gray-300">Você tem um bom conhecimento geral, mas pode revisar a linha do tempo para gabaritar!</p>
        `;
      } else {
        quizResult.innerHTML = `
          <p class="text-red-400 font-bold text-lg mb-1"><i class="fas fa-exclamation-triangle"></i> Você acertou ${score} de 10 perguntas (${percentage}%).</p>
          <p class="text-xs text-gray-300">Recomendamos ler novamente os tópicos da Linha do Tempo e tentar o quiz mais uma vez!</p>
        `;
      }
    });
  }
});
