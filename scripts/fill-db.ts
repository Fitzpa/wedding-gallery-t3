import { prisma } from '../src/server/db/client';
import jsonData from '../public/data/images.json';
const doBackfill = async () => {
  // console.log(jsonData)

  const formattedImages = jsonData.images.map((image, index) => ({
    src: image,
    likes: 0,
  }));
  console.log(formattedImages);
  const creation = await prisma.image.createMany({
    data: formattedImages,
  });

  console.log('Creation?', creation);
};

doBackfill();
