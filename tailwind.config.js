const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    content: [
      './content/index.md',
      './content/posts/*.md',
      './content/.vitepress/**/*.{vue,js,ts,jsx,tsx}'
    ],
    options: {
      safelist: [
        'btn-facebook',
        'btn-twitter',
        'btn-tumblr',
        'btn-reddit',
        'btn-google',
        'btn-linkedin',
        'btn-email',
        'btn-whatsapp',
        'btn-vk',
        'btn-telegram',
      ],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addComponents, theme }) {
      const buttons = {
        '.btn': {
          padding: `${theme('spacing.2')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.500'),
        },
        '.btn-facebook': {
          backgroundColor: '#3b5998',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#2d4373'
          },
        },
        '.btn-twitter': {
          backgroundColor: '#55acee',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#2795e9'
          },
        },
        '.btn-tumblr': {
          backgroundColor: '#35465C',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#222d3c'
          },
        },
        '.btn-reddit': {
          backgroundColor: '#5f99cf',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#3a80c1'
          },
        },
        '.btn-google': {
          backgroundColor: '#dd4b39',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#c23321'
          },
        },
        '.btn-linkedin': {
          backgroundColor: '#0077b5',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#046293'
          },
        },
        '.btn-email': {
          backgroundColor: '#777',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#5e5e5e'
          },
        },
        '.btn-whatsapp': {
          backgroundColor: '#25d366',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#1da851'
          },
        },
        '.btn-vk': {
          backgroundColor: '#507299',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#43648c'
          },
        },
        '.btn-telegram': {
          backgroundColor: '#54a9eb',
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#4b97d1'
          },
        },
      }

      addComponents(buttons)
    })
  ]
}
