import { atom } from 'jotai'
import { useAtomDevtools } from 'jotai/devtools'
import type { seedImagesSchema } from '@src/schema/image.schema';

export const isModalOpenAtom = atom<boolean>(false)

export const toggleIsModalOpenAtom = atom<boolean, boolean>(
  get => get(isModalOpenAtom),
  (_get, set) => set(isModalOpenAtom, (isModalOpenAtom) => !isModalOpenAtom)
  )

export const imagesLength = atom<number>(0)

export const setImagesLengthAtom = atom<number, number>(
  get => get(imagesLength),
  (_get, set, imagesArrayLength) => set(imagesLength, () => imagesArrayLength)
)

export interface IImageAtom {
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

//? Jotai Devtools -----------------

isModalOpenAtom.debugLabel = 'isModalOpenAtom'
toggleIsModalOpenAtom.debugLabel = 'toggleIsModalOpenAtom'
imagesLength.debugLabel = 'imagesLength'
setImagesLengthAtom.debugLabel = 'setImagesLengthAtom'
currentImageAtom.debugLabel = 'currentImageAtom'
setCurrentImageAtom.debugLabel = 'setCurrentImageAtom'
currentIndexAtom.debugLabel = 'currentIndexAtom'
setCurrentIndexAtom.debugLabel = 'setCurrentIndexAtom'
decrementIndexAtom.debugLabel = 'decrementIndexAtom'
incrementIndexAtom.debugLabel = 'incrementIndexAtom'

// The interface for the type stored in the atom.
export interface Task {
  label: string
  complete: boolean
}

// The atom to debug.
export const tasksAtom = atom<Task[]>([])

// If the useAtomDevtools name parameter is undefined, this value will be used instead.
tasksAtom.debugLabel = 'Tasks'

export const useTasksDevtools = () => {
  // The hook can be called simply by passing an atom for debugging.
  useAtomDevtools(isModalOpenAtom)
  useAtomDevtools(toggleIsModalOpenAtom)
  useAtomDevtools(imagesLength)
  useAtomDevtools(setImagesLengthAtom)
  useAtomDevtools(currentImageAtom)
  useAtomDevtools(setCurrentImageAtom)
  useAtomDevtools(currentIndexAtom)
  useAtomDevtools(setCurrentIndexAtom)
  useAtomDevtools(decrementIndexAtom)
  useAtomDevtools(incrementIndexAtom)
}