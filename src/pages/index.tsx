import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import ImageGrid from '../components/ImageGrid';
import Hero from '../components/Hero';
import { Container, Image, Box } from '@mantine/core';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['image.get-images']);

  if (isLoading) {
    return (
      <Container size={"xl"} style={{ minHeight: '100vh' }} >
        <div>Loading...</div>
      </Container>
    );
  }

  // if (data) {
  //   console.log(data);
  // }

  return (
    <Container size={"xl"} style={{ minHeight: '100vh' }} >
      <Image style={{ opacity: "0.5", width: "100vw", position: "fixed", bottom: "0", left: "0", zIndex: "1" }} width="100%" src={"/waves-bg.svg"} />

      <Box style={{ position: "relative", zIndex: "2" }}>
        <Hero />
        <ImageGrid />
      </Box>
    </Container>
  );
};

export default Home;
