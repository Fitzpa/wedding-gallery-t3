import { Container, Grid } from '@mantine/core';
import { trpc } from '../utils/trpc';
import ImageModal from './ImageModal';
import { useState } from 'react';

function ImageGrid() {
  const { data, isLoading } = trpc.useQuery(['image.get-images-by-orientation']);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <Container fluid className="container">
      <Grid>
        {data?.orderedImages?.map((image, index) => {
          if (image?.orientation === 'landscape') {
            return (
              <Grid.Col key={image?.id} span={12}>
                <ImageModal imageScr={`${image?.src}`} />
              </Grid.Col>
            );
          } else {
            return (
              <Grid.Col key={image?.id} span={4}>
                <ImageModal imageScr={`${image?.src}`} />
              </Grid.Col>
            );
          }
        })}
      </Grid>
    </Container>
  );
}

export default ImageGrid;
