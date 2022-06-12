const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {

        screens: {
            xs: '320px',
        },

        colors: {
            'black': '#000000',
            'white': '#ffffff',
            'darkgrey': '#333333',
            'darkergrey': '#212121',
            'red': '#FF0808',
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                serif: ['Roboto', ...defaultTheme.fontFamily.serif],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
