import { create } from "zustand"

export const useTimerStore = create(set => ({
  timer: 5,
  setTimer: timer => set({ timer })
}))
