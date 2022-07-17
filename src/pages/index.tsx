import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import ImageGrid from '../components/ImageGrid';
import Hero from '../components/Hero';
import { Container } from '@mantine/core';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['image.get-images']);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <Container size={"xl"}>
      <Hero />
      <ImageGrid />
    </Container>
  );
};

export default Home;
