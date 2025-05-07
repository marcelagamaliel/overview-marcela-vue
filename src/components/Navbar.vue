<template>
  <nav class="fixed top-0 left-0 w-full bg-primary text-white px-6 py-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo / Nome -->
        <div class="text-2xl font-bold text-white ">MG</div>

        <!-- Navegação -->
        <div class="space-x-6 hidden md:flex">
          <a href="#hero" class="text-gray-700 hover:text-indigo-600 font-medium">Início</a>
          <a href="#sobre" class="text-gray-700 hover:text-indigo-600 font-medium">Sobre</a>
          <a href="#projetos" class="text-gray-700 hover:text-indigo-600 font-medium">Projetos</a>
          <a href="#contato" class="text-gray-700 hover:text-indigo-600 font-medium">Contato</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>