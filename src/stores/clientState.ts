import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

interface useUserAccessToken {
  accessToken: string;
  setToken: (val: string) => void;
  removeToken: () => void
}

export const useUserAccessToken = create<useUserAccessToken>()(
  devtools(
    persist(
      (set) => ({
        accessToken: '',
        setToken: (val) => set(() => ({ accessToken: val })),
        removeToken: () => set(() => ({ accessToken: "" })),
      }),
      { name: "auth" }
    ),
  )
)