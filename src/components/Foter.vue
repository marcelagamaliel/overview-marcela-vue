<template>
  <footer class="bg-primary text-white py-6">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <p class="text-center md:text-left text-sm">
        © {{ anoAtual }} {{ nome }}. Todos os direitos reservados.
      </p>

      <div class="flex gap-4 mt-4 md:mt-0">
        <a
          v-for="social in redes"
          :key="social.nome"
          :href="social.link"
          target="_blank"
          rel="noopener"
          class="hover:opacity-80 transition"
        >
          <img :src="social.icone" :alt="social.nome" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const nome = 'Marcela Gamaliel Gottlieb'
const anoAtual = new Date().getFullYear()

const redes = [
  {
    nome: 'GitHub',
    link: 'https://github.com/seuusuario',
    icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    nome: 'LinkedIn',
    link: 'https://www.linkedin.com/in/seuusuario',
    icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
]
</script>
