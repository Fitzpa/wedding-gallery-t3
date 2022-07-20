//  @ts-nocheck
import jsonData from '../public/data/result-h-w.json';

import path from 'path';
import { promises as fs } from 'fs';
import ExifParser from 'exif-parser';
import ExifReader from 'exifreader';


const doBackfill = async () => {
  // console.log(jsonData)
  

  const formattedImages = jsonData.map(async (image, index) =>  {
    let imagePromise = aspectRatioGenerator(image.src)
    return imagePromise.then((result) => {
      console.log("🚀 ~ file: update-db.ts ~ line 26 ~ imagePromise.then ~ result", result)
      fs.appendFile(`/Users/louie/fitzpa/trpc/wedding-gallery-t3/public/data/result-gallery.json`, JSON.stringify({...image, width: result.imageWidth, height: result.imageHeight}, null, 2) + ",")
    });
  });

}
const aspectRatioGenerator = async (image: string) => {
  let imgPath =`/Users/louie/fitzpa/trpc/wedding-gallery-t3/public/${image}`

  const imgbuffer = fs.readFile(imgPath);

  const tags = ExifReader.load(await imgbuffer, {
    expanded: true,
    includeUnknown: true
});
  // console.log("🚀 ~ file: parse-json.ts ~ line 37 ~ imageOrientationChecker ~ tags", tags)


  const imageWidth = tags.file['Image Width'].value
    const imageHeight = tags.file['Image Height'].value
  //   if (tags.file['Image Width'].value > tags.file['Image Height'].value) {
  //   orientation = 'landscape';
  //   } else if (tags.file['Image Width'].value < tags.file['Image Height'].value) {
  //   orientation = 'portrait';
  //   } else {
  //   orientation = 'even';
  // }

  
  
  // console.log("🚀 ~ file: update-db.ts ~ line 57 ~ imageOrientationChecker ~ orientation", orientation)
  return { imageWidth, imageHeight };
}

doBackfill();
