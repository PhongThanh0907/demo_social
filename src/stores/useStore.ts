import { create } from 'zustand';

interface StoreState {
  isOpenLogin: boolean;
  setIsOpenLogin: (state: boolean) => void;
  avatar: string;
  setAvatar: (avatar: string) => void;
}

const useStore = create<StoreState>((set) => ({
  isOpenLogin: false,
  setIsOpenLogin: (state: boolean) => set(() => ({ isOpenLogin: state })),
  avatar: "",
  setAvatar: (avatar: string) => set(() => ({ avatar: avatar })),
}));

export default useStore;