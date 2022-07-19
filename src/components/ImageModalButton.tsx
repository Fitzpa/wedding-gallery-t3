import { Image } from '@mantine/core';
import { useAtom } from 'jotai';
import { currentIndexAtom, toggleIsModalOpenAtom, setCurrentIndexAtom, setCurrentImageAtom, currentImageAtom } from "@src/store/atoms"
import { trpc } from '@src/utils/trpc';
import { useEffect } from 'react'

function ImageModalButton({ imageId }: { imageId: string }) {
  const { data, isLoading } = trpc.useQuery(['image.get-images-by-orientation']);

  const [currentIndex] = useAtom(currentIndexAtom);
  const [, toggleIsModalOpen] = useAtom(toggleIsModalOpenAtom);
  const [, setCurrentIndex] = useAtom(setCurrentIndexAtom);
  const [, setCurrentImage] = useAtom(setCurrentImageAtom);
  const [currentImage] = useAtom(currentImageAtom);
  const test = data?.orderedImages[currentIndex];

  useEffect(() => {
    
    }, [currentIndex])

  const handleClick = () => {
    toggleIsModalOpen;
    if(imageId) {
      const indexFound = data?.orderedImages?.findIndex(image => image?.id === imageId);
      if(indexFound !== -1 && indexFound !== undefined) {
        setCurrentIndex(indexFound)
        setCurrentImage({image:data?.orderedImages[currentIndex]})
      }
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return(
      <button onClick={handleClick} style={{ border: "none", padding: 0, cursor: "pointer" }}>
        <Image src={currentImage.image?.src} alt="Hawaiian wedding photo" withPlaceholder />
      </button>
  )
};

export default ImageModalButton