<template>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
  />
  <section
    id="hero"
    class="min-h-screen relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left bg-gradient-to-br from-slate-900 via-primary to-slate-900 px-4 md:px-20 pt-20"
  >
    <!-- Elementos de fundo sutis -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Gradiente sutil no fundo -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

      <!-- Elementos decorativos minimalistas -->
      <div class="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full"></div>

      <!-- Linhas elegantes -->
      <div
        class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      ></div>
    </div>

    <!-- Conteúdo principal -->
    <div class="relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
      <!-- Coluna da Descrição -->
      <div class="md:w-1/2 mb-16 md:mb-0" data-aos="fade-up" data-aos-duration="1200">
        <div class="mb-4 inline-block">
          <span
            class="px-4 py-1.5 text-xs tracking-wider uppercase font-light bg-white/5 border border-white/10 rounded-full text-cyan-200"
          >
            Desenvolvedora Fullstack
          </span>
        </div>

        <h1 class="text-5xl md:text-6xl font-light mb-6 leading-tight tracking-tight">
          <span class="block text-white font-extralight"> Olá, sou </span>
          <span class="block text-cyan-200 mt-2 font-normal"> Marcela Gamaliel </span>
        </h1>

        <p class="text-lg md:text-xl mb-10 text-white/70 max-w-lg font-light leading-relaxed">
          Desenvolvedora Fullstack apaixonada por criar experiências digitais
          <span class="text-white">elegantes e funcionais</span> com foco em UX/UI.
        </p>

        <div class="flex flex-wrap gap-6 justify-center md:justify-start items-center">
          <a
            href="/CV - Marcela Gamaliel.pdf"
            target="_blank"
            class="inline-flex items-center gap-2 bg-transparent border border-cyan-200/30 text-cyan-100 font-light py-3 px-8 rounded-full hover:bg-cyan-900/20 transition-all duration-500"
          >
            <span>Visualizar currículo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </a>

          <div class="h-6 w-px bg-white/10"></div>
          <div class="flex gap-5">
            <a
              href="https://www.linkedin.com/in/marcela-gamaliel-446a08237/"
              target="_blank"
              class="transition-transform transform hover:scale-110"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                class="h-6 w-6"
              />
            </a>
            <a
              href="https://github.com/marcelagamaliel"
              target="_blank"
              class="transition-transform transform hover:scale-110"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                class="h-6 w-6"
              />
            </a>
            <a
              href="https://www.instagram.com/marcelagamaliel"
              target="_blank"
              class="transition-transform transform hover:scale-110"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                class="h-6 w-6"
              />
            </a>
          </div>
        </div>

        <!-- Estatísticas elegantes -->
        <div class="mt-16 flex gap-12 max-w-md justify-center md:justify-start">
          <div>
            <div class="text-3xl font-extralight text-white">
              3<span class="text-cyan-200">+</span>
            </div>
            <div class="text-xs uppercase tracking-wider text-white/40 mt-1">
              Anos de experiência
            </div>
          </div>
          <div>
            <div class="text-3xl font-extralight text-white">
              5<span class="text-cyan-200">+</span>
            </div>
            <div class="text-xs uppercase tracking-wider text-white/40 mt-1">Projetos</div>
          </div>
        </div>
      </div>

      <!-- Coluna da Imagem -->
      <div
        class="md:w-1/2 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
        <div class="relative">
          <!-- Círculo elegante ao redor da imagem -->
          <div class="absolute inset-0 -m-10 rounded-full border border-white/10"></div>

          <!-- Container da imagem com borda sutil -->
          <div
            class="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border border-white/10 shadow-2xl"
          >
            <!-- Overlay gradiente sutil -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 z-10"
            ></div>

            <img src="/foto.png" alt="Foto de Marcela" class="w-full h-full object-cover" />
          </div>
          <!-- Elemento decorativo minimalista -->
          <div
            class="absolute -bottom-4 -right-4 w-24 h-24 border border-cyan-200/20 rounded-full"
          ></div>
          <div
            class="absolute -top-4 -left-4 w-16 h-16 border border-cyan-200/20 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1200,
    easing: 'ease-out',
    once: true,
  })
})
</script>
