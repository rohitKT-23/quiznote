import { create } from "zustand"

export const useFormStore = create(set => ({
  status: "idle",
  quizStream: "",
  setQuizStream: stream => set({ quizStream: stream }),
  setStatus: status => set({ status })
}))
