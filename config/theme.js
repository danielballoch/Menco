// config/theme.js
const colors = {
    background: {
        white: '#ffffff',
        cream: '#ffe9e1',
        red: '#542323'
    },
    highlights: {
        blue: '#36648b',
    },
    neutral: {
        grey: '362E2E',
    }

  }
  const transition = {
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    duration: '0.4s',
  }
  const theme = {
    colors,
    transition,
  }
  
  export default theme