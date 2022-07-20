import { Image, SimpleGrid, Grid, Stack, MediaQuery, Title, Box, Button } from '@mantine/core';
import { trpc } from '../utils/trpc';
import ScrollToButton from './ScrollToButton';

function Hero() {
  return (
    <Box mx="auto" mb={'120px'}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          maxHeight: '100vh',
        }}
      >
        <Stack justify={'center'} align="center" style={{ minHeight: '100vh' }}>
          <Stack justify={'flex-start'} align="center">
            <SimpleGrid cols={2} className="desktop-simple-grid">
              <Image src={'/images/TCP_9475.jpg'} pt={'1rem'} />
              <Image src={'/images/TCP_9247-Edit.jpg'} pt={'1rem'} />
            </SimpleGrid>
            <SimpleGrid cols={1} className="mobile-simple-grid">
              <Image src={'/images/TCP_9247-Edit.jpg'} pt={'2rem'} />
            </SimpleGrid>
            <Box mx={'auto'} style={{ backgroundColor: '#07547f', width: '100%' }}>
              <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2rem' }}>
                <MediaQuery query="(min-width: 769px)" styles={{ fontSize: '4rem' }}>
                  <MediaQuery query="(min-width: 1320px)" styles={{ fontSize: '4.75rem' }}>
                    <Title
                      py={'1.5rem'}
                      mb={'30px'}
                      order={1}
                      align="center"
                      style={{ color: '#ffffff' }}
                      className="title"
                    >
                      Katie Pendleton &{' '}
                      <span style={{ whiteSpace: 'nowrap' }}>Louie Fitzpatrick's</span>
                      <br></br>Wedding Gallery
                    </Title>
                  </MediaQuery>
                </MediaQuery>
              </MediaQuery>
            </Box>
          </Stack>
            <Grid mb={"2rem"} justify={'center'} align={'flex-end'} grow>
              <MediaQuery query="(max-width: 1200px)" styles={{ display: 'none' }}>
                <Grid.Col sm={12} md={6} lg={4} xl={3}>
                  <Image src="/images/TCP_9147.jpg" />
                </Grid.Col>
              </MediaQuery>
              <MediaQuery query="(max-width: 1200px)" styles={{ display: 'none' }}>
                <Grid.Col sm={12} md={6} lg={4} xl={3}>
                  <Image src="/images/TCP_9013.jpg" />
                </Grid.Col>
              </MediaQuery>
              <MediaQuery query="(max-width: 1320px)" styles={{ display: 'none' }}>
                <Grid.Col sm={12} md={6} lg={4} xl={3}>
                  <Image src="/images/TCP_9334.jpg" />
                </Grid.Col>
              </MediaQuery>
              <Grid.Col sm={12} md={6} lg={4} xl={3}>
                <Stack justify={'flex-end'} align="center">
                  <MediaQuery query="(max-width: 1200px)" styles={{ display: 'none' }}>
                    <Image
                      src="/carbon_arrow-shift-down.svg"
                      width="200px"
                      height={'auto'}
                      style={{ marginBottom: '-30px' }}
                    />
                  </MediaQuery>
                  <Image src="/carbon_arrow-shift-down.svg" width="200px" height={'auto'} />
                  <ScrollToButton toId="gallery-section" duration={1000}>
                    View gallery
                  </ScrollToButton>
                </Stack>
              </Grid.Col>
            </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
 
export default Hero;
