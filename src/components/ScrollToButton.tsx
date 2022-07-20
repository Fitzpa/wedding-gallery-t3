import { Button } from '@mantine/core';

import { scrollTo } from "@utils/scrollTo";

const ScrollToButton = ({ toId, toRef, duration, children }: { toId?: string, toRef?: any, duration: number, children: any}) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  return <Button fullWidth styles={(theme) => ({
    root: {
      backgroundColor: '#0DA0F2',
      border: '2px solid #0DA0F2',
      height: "auto",
      fontSize: '2rem',
      textTransform: 'uppercase',
      padding: '0.5rem 1rem',
      transition: "all ease-in-out 0.2s",
      '&:hover': {
        backgroundColor:'#054061',
        borderColor: '#054061',
      },
    },

    leftIcon: {
      marginRight: 15,
    },
  })} onClick={handleClick}>{children}</Button>;
};

export default ScrollToButton;
