import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import Hero from '../components/Hero';
import { Container, Image, Box } from '@mantine/core';
import ImageGallery from '@components/ImageGallery';

const Home: NextPage = () => {
  const { data, isLoading, isSuccess } = trpc.useQuery(['image.get-images-by-orientation']);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container size={"xl"} style={{ minHeight: '100vh' }} >
      <Image style={{ opacity: "0.5", width: "100vw", position: "fixed", bottom: "0", left: "0", zIndex: "1" }} width="100%" src={"/waves-bg.svg"} />

      <Box style={{ position: "relative", zIndex: "2" }}>
        <Hero />
        <ImageGallery />
      </Box>
    </Container>
  );
};

export default Home;
