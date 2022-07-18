import { useState } from 'react'
import { Modal, Image } from '@mantine/core';
import { useInView } from 'react-intersection-observer';

function ImageModal({imageScr }: { imageScr: string }) {
  const [opened, setOpened] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  
  return(
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} centered size="auto" overlayColor="#111" overlayOpacity={0.75} overlayBlur={3} style={{ height: "100%", maxHeight: "calc(100vh - 5%)"}}>
        <Image src={imageScr} alt="Hawaiian wedding photo" fit='contain' height={"calc(100vh - 200px)"} />
      </Modal>

      <button ref={ref} onClick={() => setOpened(true)} style={{ border: "none", padding: 0, cursor: "pointer" }}>
        <Image src={imageScr} alt="Hawaiian wedding photo" withPlaceholder />
      </button>
    </>
  )
};

export default ImageModal