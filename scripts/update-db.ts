//  @ts-nocheck
import { prisma } from '../src/server/db/client';
import jsonData from '../public/data/result.json';

// import path from 'path';
// import { promises as fs } from 'fs';
// import ExifParser from 'exif-parser';
// import ExifReader from 'exifreader';


const doBackfill = async () => {
  console.log(jsonData)

  const data = await prisma.image.createMany({data: jsonData});
  
  console.log('data', data);
  // const formattedImages = data.map((image, index) =>  {
    // let imagePromise = imageOrientationChecker(image.src)
    // return imagePromise.then((result) => {
    //   console.log("🚀 ~ file: update-db.ts ~ line 26 ~ imagePromise.then ~ result", result)
    //   fs.appendFile(`/Users/louie/fitzpa/trpc/wedding-gallery-t3/public/data/result.json`, JSON.stringify({...image, orientation: result}, null, 2) + ",")
    // });
  // });


}
// const imageOrientationChecker = async (image: string) => {
//   let orientation = ""
//   let imgPath =`/Users/louie/fitzpa/trpc/wedding-gallery-t3/public/images/${image}`

//   const imgbuffer = fs.readFile(imgPath);

//   const tags = ExifReader.load(await imgbuffer, {
//     expanded: true,
//     includeUnknown: true
// });
//     if (tags.file['Image Width'].value > tags.file['Image Height'].value) {
//     orientation = 'landscape';
//     } else if (tags.file['Image Width'].value < tags.file['Image Height'].value) {
//     orientation = 'portrait';
//     } else {
//     orientation = 'even';
//   }

  
  
//   // console.log("🚀 ~ file: update-db.ts ~ line 57 ~ imageOrientationChecker ~ orientation", orientation)
//   return orientation;
// }

doBackfill();
