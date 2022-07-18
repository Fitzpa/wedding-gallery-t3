import { atom } from "jotai";
export interface IImageAtom {
  id: string;
  src: string;
  alt: string;
  likes: number;
  orientation?: string;
  currentImageId: string;
}
export const imagesAtom = atom<IImageAtom[]>([]);

// const toggleNextImage = (images: IImageAtom[], id: string): IImageAtom[] =>
// images.map((image) => ({
//     ...image,
//     currentImageId: image.id,
//   }));

// export const toggleNextImageAtom = atom(
//   () => "",
//   (get, set, id: number) => {
//     set(imagesAtom, toggleImage(get(imagesAtom), id));
//   }
// );