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
        }}
        className="hero-container"
      >
        <Stack className="hero-stack" align="center" style={{ minHeight: '100vh' }}>
          <Stack justify={'flex-start'} align="center">
            <Grid className='hero-grid'>
              <Grid.Col lg={8} xl={6}>
                <Stack justify={'start'} align="start" style={{ height: "100%"}}>
                  <Box
                    mx={'auto'}
                    style={{
                      backgroundColor: '#07547f',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                    className="hero-box"
                  >
                    <Box
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: '2',
                      }}
                    >
                      <img
                        src={'/images/TCP_9680.jpg'}
                        alt="Mantine"
                        style={{
                          height: '100%',
                          width: '100%',
                          opacity: '0.6',
                          objectFit: 'cover',
                        }}
                      />
                      <Box style={{ height: "100%", width: "100%", position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: '3', backgroundColor: "rgba(0,0,0,0.5)"}}></Box>
                    </Box>
                    <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.5rem' }}>
                      <MediaQuery query="(min-width: 769px)" styles={{ fontSize: '4rem' }}>
                        <MediaQuery query="(min-width: 1320px)" styles={{ fontSize: '4.75rem' }}>
                          <Title
                            py={'1.5rem'}
                            order={1}
                            align="center"
                            style={{ color: '#ffffff', position: 'relative', zIndex: '3' }}
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
                  <ScrollToButton toId="gallery-section" duration={1000}>
                    View gallery
                  </ScrollToButton>
                </Stack>
              </Grid.Col>
              <Grid.Col lg={4} xl={6}>
                <Stack className="desktop-simple-grid" align={'between'}>
                  <Image src={'/images/TCP_9475.jpg'} fit="contain" />
                  <Image src={'/images/TCP_9247-Edit.jpg'} fit="contain" />
                </Stack>
                <Stack className="mobile-simple-grid">
                  <Image src={'/images/TCP_9247-Edit.jpg'} fit="contain" pt={'2rem'} />
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Hero;
