export const SideBySideImage = {
  baseStyle: {
    sideBySideImageContainerStyle: {
      py: [3, 3, 3, 8, 24],
      borderTop: '1px solid',
      borderColor: 'primary',
    },
    outerContainer: {
      position: 'relative',
    },
    contentWrapper: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      position: 'relative',
      zIndex: 99,
      my: [4, 0],
      //   maxWidth: 'xl',
      //   mx: 'auto',
    },
    innerContainer: {
      zIndex: 2,
      display: { base: 'block', lg: 'grid' },
      gridTemplateColumns: '3fr 5fr',
      height: '100%',
      alignItems: 'center',
      mx: 'auto',
      maxWidth: '7xl',
      p: 4,
    },
  },
  variants: {
    default: {},
    // Add more variants as needed
  },
};
