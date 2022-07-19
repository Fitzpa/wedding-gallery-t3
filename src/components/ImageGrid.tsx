import { Container, Grid } from '@mantine/core';
import { trpc } from '../utils/trpc';
import ImageModal from './ImageModal';
import ImageModalButton from './ImageModalButton';

function ImageGrid() {
  const { data, isLoading } = trpc.useQuery(['image.get-images-by-orientation']);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (data) {
  //   console.log(data);
  // }

  return (
    <Container fluid className="container">
      <ImageModal />
      {/* <Grid>
        {data?.orderedImages?.map((image, index) => {
          if(image?.id) {
            if (image?.orientation === 'landscape') {
              return (
                <Grid.Col key={image.id} span={12}>
                  <ImageModalButton imageId={image.id} />
                </Grid.Col>
              );
            } else {
              return (
                <Grid.Col key={image.id} span={4}>
                  <ImageModalButton imageId={image.id} />
                </Grid.Col>
              );
            }
          }
        })}
      </Grid> */}
    </Container>
  );
}

export default ImageGrid;
