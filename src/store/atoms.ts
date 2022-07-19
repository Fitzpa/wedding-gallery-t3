import { atom } from 'jotai'
import type { seedImagesSchema } from '@src/schema/image.schema';
export const isModalOpenAtom = atom<boolean>(false)

// export const isModalOpen = atom<boolean>(false)

export const toggleIsModalOpenAtom = atom<boolean, boolean>(
  get => get(isModalOpenAtom),
  (_get, set) => set(isModalOpenAtom, (isModalOpenAtom) => !isModalOpenAtom)
  )

export const imagesLength = atom<number>(0)

export const setImagesLengthAtom = atom<number, number>(
  get => get(imagesLength),
  (_get, set, imagesArrayLength) => set(imagesLength, () => imagesArrayLength)
)

// type orderedImages: seedImagesSchema
// const defaultImages: typeof seedImagesSchema = [{id: "", src: "", likes: 0, orientation: ""}]
// export const orderedImagesAtom = atom<seedImagesSchema>(defaultImages)

// export const setOrderedImagesAtom = atom<seedImagesSchema, seedImagesSchema>(
//   get => get(orderedImagesAtom),
//   (_get, set, imagesArray) => set(orderedImagesAtom, () => imagesArray)
// )

interface IImageAtom {
  image: {
    src: string
    id?: string | undefined
    likes?: number | undefined
    orientation?: string | undefined
  } | undefined
}

export const currentImageAtom = atom<IImageAtom>({
  image: {
    src: '',
    id: '',
    likes: 0,
    orientation: '',
  },
})

export const setCurrentImageAtom = atom<IImageAtom, IImageAtom>(
  get => get(currentImageAtom),
  (_get, set, image) => set(currentImageAtom, () => image)
)

export const currentIndexAtom = atom<number>(0)

export const setCurrentIndexAtom = atom<number, number>(
  get => get(currentIndexAtom),
  (_get, set, imageIndex) => set(currentIndexAtom, () => imageIndex)
)

export const incrementIndexAtom = atom<number, number>(
  get => get(currentIndexAtom),
  (_get, set) => set(currentIndexAtom, (currentIndexAtom) => currentIndexAtom + 1)
)

export const decrementIndexAtom = atom<number, number>(
  get => get(currentIndexAtom),
  (_get, set) => set(currentIndexAtom, (currentIndexAtom) => currentIndexAtom - 1)
)