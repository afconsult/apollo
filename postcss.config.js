module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {
      // eslint-disable-line sort-keys
      extensions: {
        '--mobile': '(min-width: 320px)',
        '--mobile-only': '(min-width: 320px) and (max-width: 767px)',
        '--tablet': '(min-width: 768px)',
        '--tablet-only': '(min-width: 768px) and (max-width: 1024px)',
        '--desktop': '(min-width: 1025px)', // eslint-disable-line sort-keys
        '--desktop-only': '(min-width: 1025px) and (max-width: 1280px)',
        '--large-desktop': '(min-width: 1281px)',
      },
    },
    'postcss-preset-env': {
      // eslint-disable-line sort-keys
      stage: 0,
    },
    'postcss-custom-properties': {
      // eslint-disable-line sort-keys
      preserve: true,
      variables: {
        '--black': '#1e1e1e',
        '--charcoal': '#505050',
        '--cloud': '#dee6ec',
        '--danger': '#ce5757',
        '--danger-hover': '#b14a4a',
        '--dark-gray': '#a3a3a3',
        '--day': '#3d7796',
        '--evening': '#32647f',
        '--light-smoke': '#f6f6f6',
        '--marble': '#f0f0f0',
        '--midnight': '#24495c',
        '--misty': '#c8c8c8',
        '--morning': '#6593ad',
        '--sky': '#c2d3e0',
        '--stone': '#7c7c7c',
        '--success': '#67a799',
        '--success-hover': '#5c9286',
        '--system-fonts':
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', // eslint-disable-line sort-keys, max-len
        '--warning': '#f6ce8e',
        '--warning-hover': '#efbf72',
        '--white': '#ffffff',
      },
    },
    'postcss-browser-reporter': {}, // eslint-disable-line sort-keys
  },
};
