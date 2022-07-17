import { Global, useMantineTheme } from '@mantine/core';
export function GlobalStyles() {
  const theme = useMantineTheme();
  return (
    <Global
      styles={() => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          // background: "rgb(2,0,36)",
          background: "linear-gradient(5deg, rgba(2,0,36,1) 0%, rgba(0,86,131,1) 17%, rgba(75,175,201,1) 42%, rgba(147,203,222,1) 67%, rgba(248,237,220,1) 100%)",
          color: "#000"
        },
      })}
    />
  );
}