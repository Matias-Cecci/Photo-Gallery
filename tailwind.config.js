/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  customFonts: {
    Roboto: {
      // El nombre de la tipografía.
      name: 'Roboto',
      // La fuente web de la tipografía.
      src: ["url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap')"],
      // La familia de fuentes predeterminada de la tipografía.
      defaultWeight: '400',
      // El peso de la fuente predeterminada de la tipografía.
      defaultStyle: 'normal'
    }
  },
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['system-ui']
    },
    extend: {}
  },
  plugins: []
}
