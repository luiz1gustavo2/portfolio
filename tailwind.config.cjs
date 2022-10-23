module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}",],
  daisyui: {
    themes: [
      {
        'theme': {  

          'dark':             '#171717',
          'neutral-blue':     '#0F172A',
          'neutral':          '#374151',
          'light':            '#ffffff',

          'blue-100':         '#E0F2FE',
          'blue-300':         '#38BDF8',
          'blue-500':         '#0EA5E9',
          'blue-700':         '#0369A1',
          'blue-800':         '#075985',
          'blue-900':         '#0C4A6E',

          'primary' :         '#0284C7',       
          'primary-focus' :   '#395A8A',     
          'primary-content' : '#ffffff',   

          'accent' :          '#37cdbe',            
          'accent-focus' :    '#2aa79b',      
          'accent-content' :  '#ffffff',
          'gold-700' :        '#FFD700', 
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}