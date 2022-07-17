import { Container, Grid } from '@mantine/core';
import { trpc } from '../utils/trpc';
import ImageModal from './ImageModal';

function ImageGrid() {
  const { data, isLoading } = trpc.useQuery(['image.get-images-by-orientation']);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    console.log(data);
  }

  let landscapeCount = 0;
  let portraitCount = 0;
  const orderedImages = data?.images.map((image, index) => {
    if (index % 4 === 0) {
      landscapeCount++;
      return {
        ...data?.landscapes[landscapeCount - 1],
        src: `/images/${data?.landscapes[landscapeCount - 1]?.src}`,
      };
    } else {
      portraitCount++;
      if (data?.portraits[portraitCount - 1]) {
        return {
          ...data?.portraits[portraitCount - 1],
          src: `/images/${data?.portraits[portraitCount - 1]?.src}`,
        };
      }
    }
  });
  console.log('🚀 ~ file: ImageGrid.tsx ~ line 37 ~ ImageGrid ~ orderedImages', orderedImages);

  return (
    <Container fluid className="container">
      <Grid>
        {orderedImages?.map((image, index) => {
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
