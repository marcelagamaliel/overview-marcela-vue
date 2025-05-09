<template>
  <section id="projetos" class="py-20 px-4 bg-primary-light #066699">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">Projetos</h2>

      <div class="grid gap-8 md:grid-cols-2">
        <div
          v-for="projeto in projetos"
          :key="projeto.titulo"
          class="bg-gray-50 rounded-lg shadow p-6 hover:shadow-md transition"
        >
          <h3 class="text-xl font-semibold text-indigo-700 mb-2">{{ projeto.titulo }}</h3>
          <p class="text-gray-600 mb-4">{{ projeto.descricao }}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in projeto.tecnologias"
              :key="tech"
              class="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex gap-4">
            <a
              :href="projeto.github"
              target="_blank"
              class="text-sm text-indigo-600 font-medium hover:underline"
              v-if="projeto.github"
            >
              GitHub
            </a>
            <a
              :href="projeto.link"
              target="_blank"
              class="text-sm text-indigo-600 font-medium hover:underline"
              v-if="projeto.link"
            >
              Ver Projeto
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projetos = [
  {
    titulo: 'Sistema de Pesquisa de Satisfação',
    descricao:
      'Aplicação Vue SPA que coleta feedback de usuários usando lógica condicional entre perguntas.',
    tecnologias: ['Vue.js', 'Tailwind CSS', 'Pinia', 'Node.js'],
    github: 'https://github.com/seuusuario/pesquisa-satisfacao',
    link: 'https://seuprojeto.vercel.app',
  },
  {
    titulo: 'Portfólio Pessoal',
    descricao:
      'Portfólio moderno e responsivo criado com Vue e Tailwind, destacando meus projetos e habilidades.',
    tecnologias: ['Vue.js', 'Tailwind CSS'],
    github: 'https://github.com/seuusuario/portfolio',
    link: '',
  },
  // Adicione mais projetos aqui se quiser
]
</script>
