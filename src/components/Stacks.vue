<template>
  <section
    id="stacks"
    class="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-slate-900"
  >
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"
      ></div>
    </div>

    <div class="max-w-6xl mx-auto text-center relative z-10">
      <h2
        class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
        data-aos="fade-down"
      >
        Minhas Stacks
      </h2>

      <p
        class="text-lg text-gray-300 max-w-2xl mx-auto mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Tecnologias e ferramentas que utilizo para criar experiências digitais incríveis
      </p>

      <!-- Categories -->
      <div
        class="mb-12 flex flex-wrap justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="
            activeCategory === category
              ? 'bg-white text-primary shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          "
        >
          {{ category }}
        </button>
      </div>

      <!-- Stacks grid -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          v-for="stack in filteredStacks"
          :key="stack.name"
          class="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          data-aos="zoom-in"
          :data-aos-delay="300 + filteredStacks.indexOf(stack) * 50"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>

          <!-- Skill level indicator -->

          <div class="flex flex-col items-center relative z-10">
            <div class="w-16 h-16 mb-4 relative flex items-center justify-center">
              <img
                :src="stack.icon"
                :alt="stack.name"
                class="w-14 h-14 object-contain transition-all duration-500 group-hover:scale-110 filter drop-shadow-lg"
              />
            </div>
            <p
              class="text-base font-medium text-white group-hover:text-cyan-300 transition-colors duration-300"
            >
              {{ stack.name }}
            </p>
            <p
              class="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              {{ stack.experience }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Categories
const categories = ['Todas', 'Frontend', 'Backend', 'Design', 'DevOps']
const activeCategory = ref('Todas')

// Enhanced stacks with categories, experience and skill level
const stacks = [
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    category: 'Frontend',
    experience: '3+ anos de experiência',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'Frontend',
    experience: '5+ anos de experiência',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'Frontend',
    experience: '5+ anos de experiência',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'Frontend',
    experience: '5+ anos de experiência',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    category: 'Frontend',
    experience: '2+ anos de experiência',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'DevOps',
    experience: '4+ anos de experiência',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    category: 'Design',
    experience: '3+ anos de experiência',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'Backend',
    experience: '3+ anos de experiência',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Frontend',
    experience: '2+ anos de experiência',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'Frontend',
    experience: '2+ anos de experiência',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'DevOps',
    experience: '1+ ano de experiência',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'Backend',
    experience: '2+ anos de experiência',
  },
]

// Filter stacks by category
const filteredStacks = computed(() => {
  if (activeCategory.value === 'Todas') {
    return stacks
  }
  return stacks.filter(stack => stack.category === activeCategory.value)
})

// Initialize AOS animation library
onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
  })
})
</script>

<style scoped>
/* Optional floating animation for the icons */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.group:hover img {
  animation: float 2s ease-in-out infinite;
}
</style>
