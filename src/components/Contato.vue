<template>
  <section id="contato" class="py-20 px-4 bg-primary-light text-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-indigo-600 mb-8">Entre em Contato</h2>
      <p class="mb-10 text-withe-600">
        Tem alguma dúvida, ideia ou quer trabalhar comigo? Preencha o formulário abaixo e entrarei
        em contato!
      </p>

      <form @submit.prevent="enviarFormulario" class="grid gap-6 text-left">
        <div>
          <label class="block mb-1 font-medium">Nome</label>
          <input
            v-model="form.nome"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Mensagem</label>
          <textarea
            v-model="form.mensagem"
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded"
        >
          Enviar Mensagem
        </button>
      </form>

      <p v-if="mensagemEnviada" class="mt-6 text-green-600 font-semibold">
        Obrigado! Sua mensagem foi enviada com sucesso.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  nome: '',
  email: '',
  mensagem: '',
})

const mensagemEnviada = ref(false)

const enviarFormulario = () => {
  // Simula envio
  console.log('Dados do formulário:', form.value)

  // Reset
  mensagemEnviada.value = true
  setTimeout(() => (mensagemEnviada.value = false), 4000)

  form.value = { nome: '', email: '', mensagem: '' }
}
</script>
