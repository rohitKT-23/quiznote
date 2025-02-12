import { create } from "zustand"

const initialState = {
  quizzes: [],
  index: 0,
  selectedAnswer: "",
  points: 1,
  totalPoints: 0
}

export const useQuizStore = create(set => ({
  ...initialState,
  setQuizzes: quizzes => set({ quizzes, points: 100 / quizzes.length }),
  nextIndex: () =>
    set(state => ({
      index:
        state.index + 1 === state.quizzes.length
          ? state.index
          : state.index + 1,
      selectedAnswer: ""
    })),
  setSelectedAnswer: selectedAnswer => set({ selectedAnswer }),
  addPoints: () =>
    set(state => ({ totalPoints: state.totalPoints + state.points })),
  reset: () =>
    set({
      ...initialState
    })
}))
