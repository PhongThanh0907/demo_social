import { create } from 'zustand';

interface StoreState {
  isOpenLogin: boolean;
  setIsOpenLogin: (state: boolean) => void;
  avatar: string;
  setAvatar: (avatar: string) => void;
  profile: {
    name: string;
    avatar: string;
    localName: string;
  };
  setProfile: (profile: {
    name: string;
    avatar: string;
    localName: string;
  }) => void;

}

const useStore = create<StoreState>((set) => ({
  isOpenLogin: false,
  setIsOpenLogin: (state: boolean) => set(() => ({ isOpenLogin: state })),
  avatar: "",
  setAvatar: (avatar: string) => set(() => ({ avatar: avatar })),
  profile: {
    name: "",
    avatar: "",
    localName: "",
  },
  setProfile: (profile: {
    name: string;
    avatar: string;
    localName: string;
  }) => set(() => ({ profile: profile })),
}));

export default useStore;