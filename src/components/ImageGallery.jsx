import React, { useState, useCallback } from "react";
import { Box } from "@mantine/core";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { trpc } from "@src/utils/trpc";
import photos from '@src/../public/data/result-gallery.json';

function ImageGallery({viewerIsOpen, setViewerIsOpen}) {
  // const { data, isLoading } = trpc.useQuery(['image.get-images-by-orientation']);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
// interface IPhotos {
//   photos: {
//     src: string;
//     srcSet?: string | string[] | undefined;
//     sizes?: string | string[] | undefined;
//     width: number;
//     height: number;
//     alt?: string | undefined;
//     key?: string | undefined;
//   }[]
// }

  return (
    <Box id="gallery-section">
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
}

export default ImageGallery
