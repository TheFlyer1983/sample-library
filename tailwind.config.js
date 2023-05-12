/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'p-yellow': '#FFC634',
        'p-yellow-light': '#FFE452',
        'p-yellow-dark': '#D79E0C',
        'p-yellow-pale': '#FFF2D1',
        'p-yellow-very-pale': '#FCFAF3',
        'p-aqua': '#2CC4E7',
        'p-aqua-light': '#4AE2FF',
        'p-aqua-dark': '#049CBF',
        'p-aqua-pale': '#EAFCFF',
        'p-pink': '#EF4583',
        'p-pink-light': '#FF63A1',
        'p-pink-dark': '#C71D5B',
        'p-pink-pale': '#FDF8FA',
        'p-green': '#53DBB8',
        'p-green-light': '#71F5D6',
        'p-green-dark': '#2BB390',
        'p-green-pale': '#D6FFF4',
        'p-navy': '#0E0E56',
        'p-navy-light': '#36367E',
        'p-navy-dark': '#0A0A42',
        'p-navy-pale': '#EFEFFC',

        //Sunrise = p-pink / p-yellow
        //Cool Blue = p-aqua / p-green
        //Deep Ocean = p-navy-light / p-navy-dark

        'p-gray-light': '#F3F4F6',
        'p-gray': '#9CA3AF',
        'p-gray-1': '#1F2937',
        'p-gray-2': '#374151',
        'p-gray-3': '#4B5563',
        'p-gray-4': '#6B7280',
        'p-gray-5': '#9CA3AF',
        'p-gray-6': '#D1D5DB',
        'p-gray-7': '#E5E7EB',
        'p-gray-8': '#F3F4F6',
        'p-purple-light': '#7C7CC4',

        'branding-sidebar-background': 'var(--branding-sidebar-background)',
        'branding-sidebar-background-opacity': 'var(--branding-sidebar-background-opacity)',
        'branding-sidebar-accent': 'var(--branding-sidebar-accent)',
        'branding-sidebar-hover': 'var(--branding-sidebar-hover)',
        'branding-sidebar-text': 'var(--branding-sidebar-text)',
        'branding-sidebar-active': 'var(--branding-sidebar-active)',
        'branding-sidebar-title-background': 'var(--branding-sidebar-title-background)',
        'branding-sidebar-title': 'var(--branding-sidebar-title)',
        'branding-sidebar-sub-title': 'var(--branding-sidebar-sub-title)',
        'branding-sidebar-sub-title-hover': 'var(--branding-sidebar-title-hover)',
      },
      fontSize: {
        64: '64px',
        28: '28px',
        20: '20px',
        xxs: '0.625rem',
      },
      lineHeight: {
        74: '74px',
        40: '40px',
        38: '38px',
        32: '32px',
        24: '24px',
        22: '22px',
      },
      fontFamily: {
        sans: ['"filson-pro"', 'sans-serif'],
      },
      borderWidth: {
        3: '3px',
        6: '6px',
      },
      space: {
        m05: '-0.5rem',
      },
      width: {
        'user-icon': '1.875rem',
        'user-icon-xs': '1.25rem',
      },
      height: {
        'user-icon': '1.875rem',
        'user-icon-xs': '1.25rem',
      },
      minHeight: {
        50: '50px',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
};
