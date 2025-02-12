import { useState } from "react"
import TabComponent from "@/components/shared/TabComponent"
import FileNote from "@/components/pages/FileNote"
import TextNote from "@/components/pages/TextNote"
import FormField from "@/components/pages/FormField"

export default function Form({ onSubmit, timer, onSetTimer }) {
  const [step, setStep] = useState(0)

  return (
    <FormField>
      {/* Transparent Background Image */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center opacity-10"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1678048604398-f42dda6997bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVlc3Rpb25zfGVufDB8fDB8fHww')`, // Replace with your image path
          backgroundSize: "cover"
        }}
      />

      <form onSubmit={onSubmit} className="relative z-10 space-y-6">
        <header className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">Add Notes</h2>
          <p className="text-sm text-zinc-500">
            Paste your notes as text or upload a file
          </p>
        </header>
        <div className="flex flex-col gap-6 mb-6">
          <TabComponent step={step} onSetStep={setStep}>
            <label htmlFor="topic" className="block mb-4">
              <span className="block text-base font-medium text-zinc-700 mb-2">
                Topic
              </span>
              <input
                type="text"
                name="topic"
                id="topic"
                placeholder="Object-oriented programming in Java"
                className="font-geistmono appearance-none w-full p-3 border border-zinc-200 placeholder-zinc-400 text-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </label>
            {step === 0 ? <TextNote /> : <FileNote />}
          </TabComponent>
        </div>

        <fieldset className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-6 mb-8">
          <label htmlFor="difficulty" className="block">
            <p className="text-sm font-medium text-zinc-600 mb-2">
              Select difficulty level
            </p>

            <select
              className="font-geistmono block w-full rounded-md border-2 border-zinc-300 py-2 px-3 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              name="difficulty"
              id="difficulty"
            >
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <label htmlFor="quizCount" className="block">
            <p className="text-sm font-medium text-zinc-600 mb-2">
              How many quizzes do you want to generate?
            </p>

            <select
              className="font-geistmono block w-full rounded-md border-2 border-zinc-300 py-2 px-3 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              name="quizCount"
              id="quizCount"
            >
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>

          <label htmlFor="timer" className="block">
            <p className="text-sm font-medium text-zinc-600 mb-2">
              Completion Time
            </p>

            <select
              className="font-geistmono block w-full rounded-md border-2 border-zinc-300 py-2 px-3 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              name="timer"
              id="timer"
              value={timer}
              onChange={e => onSetTimer(+e.target.value)}
            >
              <option value="1">1 min</option>
              <option value="5">5 min</option>
              <option value="10">10 min </option>
              <option value="15">15 min</option>
            </select>
          </label>
        </fieldset>

        <button className="flex items-center justify-center w-full max-w-lg mx-auto duration-200 text-sm gap-x-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all ease-in-out">
          Generate Quiz
        </button>
      </form>
    </FormField>
  )
}
