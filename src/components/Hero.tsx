import { Image, SimpleGrid, Stack,  MediaQuery, Title, Box } from '@mantine/core';
import { trpc } from '../utils/trpc';

function Hero() {
  const { data, isLoading } = trpc.useQuery(['image.get-images']);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <Box mx="auto" mb={"120px"}>
      <Box
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', maxHeight: '100vh', paddingTop: "40px" }}
      >
        <Stack>
          <SimpleGrid cols={3}>
            <Image src="/images/TCP_9147.jpg" />
            <Image src="/images/TCP_9013.jpg" />
            <Image src="/images/TCP_9334.jpg" />
          </SimpleGrid>
          <Box mx={"auto"} px={60} style={{ backgroundColor: "#07547f", width: "100%" }}>
            <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2rem' }}>
              <MediaQuery query="(min-width: 769px)" styles={{ fontSize: '4.75rem' }}>
                <Title py={"40px"} mb={"30px"} order={1} align="center" style={{ color: '#f8eddc' }} className="title">
                  Katie Pendleton & <span style={{ whiteSpace: 'nowrap' }}>Louie Fitzpatrick's</span>
                  <br></br>Wedding Gallery
                </Title>
              </MediaQuery>
            </MediaQuery>
          </Box>
          {/* <SimpleGrid cols={2}>
            <Image src="/images/TCP_8953.jpg" />
            <Image src="/images/TCP_9117.jpg" />
          </SimpleGrid> */}
        </Stack>
      </Box>
    </Box>
  );
}

export default Hero;
