import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import ImageGrid from '../components/ImageGrid';
import Hero from '../components/Hero';
import { Container, Image, Box } from '@mantine/core';
import { useAtom } from 'jotai';
import { z } from 'zod'
import { seedImagesSchema } from '@src/schema/image.schema';

const Home: NextPage = () => {
  const { data, isLoading, isSuccess } = trpc.useQuery(['image.get-images-by-orientation']);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if(isSuccess) {
  //   const result = seedImagesSchema.safeParse(data.orderedImages);
  //   if (!result.success) {
  //     // handle error then return
  //     console.error("orderedImages data is invalid.", result.error);
  //     result.error;
  //   } else {

  //     // do something
  //     result.data;
  //   }
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
