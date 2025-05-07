<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <Hero />
      <Sobre />
      <Stacks />
      <Projetos />
      <Contato />
    </main>
    <Foter />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Sobre from './components/Sobre.vue';
import Stacks from './components/Stacks.vue';
import Projetos from './components/Projetos.vue';
import Contato from './components/Contato.vue';
import Foter from './components/Foter.vue';
</script>

<style >
/* Ajuste para garantir que o conteúdo não fique atrás do cabeçalho */

</style>
