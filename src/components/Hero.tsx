import { BackgroundImage, Center, Title, Box } from '@mantine/core';

function Hero() {
  return (
    <Box mx="auto">
      <BackgroundImage sx={() => ({ minHeight: "100vh" })}
        src="/images/TCP_9247-Edit.jpg"
      >
        <Box style={{ backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "end", height: "100vh"}}>
          <Title order={1} align="center" style={{ color: "#fff", fontFamily: "Maginia", fontSize: "4.75rem", marginBottom: "10%" }}>
          Katie Pendleton &<br></br>Louie Fitzpatrick's<br></br>Wedding Gallery
          </Title>
          </Box>

      </BackgroundImage>
    </Box>
  );
}

export default Hero