/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,js, tsx,ts,html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}