// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A2B4C',     // azul-marinho principal
          dark: '#24375B',        // azul-marinho mais escuro
          light: '#32496D',       // opcional — tom mais claro
        },
        second: {
          DEFAULT: '#066699' //beje
        },
      },
    },
  },
  plugins: [],
}
