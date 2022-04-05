module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}",],
  daisyui: {
    themes: [
      {
        'theme': {  

          'dark':             '#282c34',
          'neutral':          '#3d4451',
          'light':            '#ffffff',

          'light-blue':       '#0891b2',
          'blue':             '#0284c7',
          'dark-blue':        '#2563eb',

          'primary' :         '#4C85FC',       
          'primary-focus' :   '#395A8A',     
          'primary-content' : '#ffffff',   

          'accent' :          '#37cdbe',            
          'accent-focus' :    '#2aa79b',      
          'accent-content' :  '#ffffff',    
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