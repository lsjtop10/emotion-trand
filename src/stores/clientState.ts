import { create } from 'zustand'

interface useUserAccessToken {
  accessToken : string;
  setToken : (val : string) => void;
}

export const useUserAccessToken = create<useUserAccessToken>((set)=>({
  accessToken: '',
  setToken : (val) => set(() => ({ accessToken:val }))
}))

