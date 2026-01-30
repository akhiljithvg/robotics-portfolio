/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0f1c', // Deep dark blue
                primary: '#3b82f6',    // Bright blue
                secondary: '#1e293b',  // Darker slate for cards
                text: '#f8fafc',       // Off-white text
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
