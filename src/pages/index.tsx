import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import Hero from '../components/Hero';
import { Container, Image, Box, Stack } from '@mantine/core';
import ImageGallery from '@components/ImageGallery';
import ScrollToButton from '@components/ScrollToButton';
import { useState, useEffect } from 'react';
import cx from 'classnames';

const Home: NextPage = () => {
  // const { data, isLoading, isSuccess } = trpc.useQuery(['image.get-images-by-orientation']);

  // if (isLoading) {
  //   return (
  //     <Container size={'xl'}>
  //       <Stack justify={'center'} align={'center'} style={{ minHeight: '100vh' }}>
  //         <Image src="/loader.svg" />
  //       </Stack>
  //     </Container>
  //   );
  // }

  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body');

      if (viewerIsOpen && body) {
        body.style.overflow = 'hidden';
      } else if (!viewerIsOpen && body) {
        // Enable scroll
        body.style.overflow = 'auto';
      }
    }
  }, [viewerIsOpen]);

  return (
    <Container size={'xl'} style={{ minHeight: '100vh' }} mb={'4rem'} id="top" className={cx(viewerIsOpen && "overflow-hidden")}>
      <Image
        style={{
          opacity: '0.5',
          width: '100vw',
          position: 'fixed',
          bottom: '0',
          left: '0',
          zIndex: '1',
          pointerEvents: 'none',
        }}
        width="100%"
        src={'/waves-bg.svg'}
      />

      <Box mb={'2rem'} style={{ position: 'relative', zIndex: '2' }} className={cx(viewerIsOpen && "overflow-hidden")}>
        <Hero />
        <ImageGallery viewerIsOpen={viewerIsOpen} setViewerIsOpen={setViewerIsOpen} />
      </Box>
      <Box mb={'2rem'} style={{ position: 'relative', zIndex: '2' }}>
        <ScrollToButton toId="top" duration={3000}>
          Back to top?
        </ScrollToButton>
      </Box>
    </Container>
  );
};

export default Home;
