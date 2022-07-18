import { prisma } from '../src/server/db/client';
import jsonData from '../public/data/result.json';

const doBackfill = async () => {
  console.log(jsonData)

  const data = await prisma.image.createMany({data: jsonData});
  
  console.log('data', data);
}

doBackfill();
