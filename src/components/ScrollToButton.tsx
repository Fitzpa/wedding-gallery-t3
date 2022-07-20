import { Button } from '@mantine/core';

import { scrollTo } from "@utils/scrollTo";

const ScrollToButton = ({ toId, toRef, duration, children }: { toId?: string, toRef?: any, duration: number, children: any}) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  return <Button styles={(theme) => ({
    root: {
      backgroundColor: '#07547f',
      border: '2px solid #07547f',
      height: "auto",
      fontSize: '2rem',
      textTransform: 'uppercase',
      padding: '0.5rem 1rem',
      transition: "all ease-in-out 0.2s",
      '&:hover': {
        backgroundColor: "transparent",
        borderColor: '#07547f',
        color: '#07547f'
      },
    },

    leftIcon: {
      marginRight: 15,
    },
  })} onClick={handleClick}>{children}</Button>;
};

export default ScrollToButton;
