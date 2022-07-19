import { Modal, Image } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAtom } from 'jotai';
import { isModalOpenAtom, toggleIsModalOpenAtom, currentImageAtom } from '@src/store/atoms';
import { trpc } from '@src/utils/trpc';

function ImageModal() {
  const { data, isLoading } = trpc.useQuery(['image.get-images-by-orientation']);
  const [currentImage] = useAtom(currentImageAtom);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const [isModalOpen] = useAtom(isModalOpenAtom);
  const [, toggleIsModalOpen] = useAtom(toggleIsModalOpenAtom);
  return (
    // <Modal
    //   opened={isModalOpen}
    //   onClose={() => toggleIsModalOpen}
    //   centered
    //   size="auto"
    //   overlayColor="#111"
    //   overlayOpacity={0.75}
    //   overlayBlur={3}
    //   style={{ height: '100%', maxHeight: 'calc(100vh - 5%)' }}
    // >
      <Swiper spaceBetween={50} slidesPerView={3}>
        {data?.orderedImages?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={image?.src}
                alt="Hawaiian wedding photo"
                fit="contain"
                height={'calc(100vh - 200px)'}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    // </Modal>
  );
}

export default ImageModal;
