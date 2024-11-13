const baseStyle = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    p: 4,
    position: 'relative',
    zIndex: 99,
    color: 'dark',
  },
  titleStyle: {
    textTransform: 'uppercase',
    mb: 4,
    fontSize: ['2xl', '3xl', '4xl', '3xl'],
  },
  subtitleStyle: {
    fontSize: 'xl',
    mb: 2,
  },
  bodyContainerStyle: {
    mt: 2,
    lineHeight: 1.75,
  },
  button: {
    mt: 4,
    mx: 2,
    variant: 'solid',
  },
};

export const ContentComponent = {
  baseStyle,
  variants: {
    hero: {
      titleStyle: {
        fontWeight: [300, 300, 300, 100],
        fontSize: ['2xl', '3xl', '4xl', '5xl'],
        // a glass elegant text shadow
        textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        color: 'white',
      },
    },
    darkText: {
      containerStyle: {
        bg: 'gray.800',
        color: 'dark',
      },
      titleStyle: {
        color: 'dark',
      },
      subtitleStyle: {
        color: 'dark',
      },
      bodyContainerStyle: {
        color: 'dark',
      },
      button: {
        variant: 'outline',
      },
    },
    whiteText: {
      containerStyle: {
        color: 'white',
      },
      titleStyle: {
        color: 'white',
      },
      subtitleStyle: {
        color: 'white',
      },
      bodyContainerStyle: {
        color: 'white',
      },
      button: {},
    },
  },
};
