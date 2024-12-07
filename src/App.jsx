import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div>
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(selectedId !== id ? id : null);
  }
  return (
    <div className=" grid grid-cols-1 gap-3 sm:grid-cols-3">
      {questions.map((question) => (
        <Card
          key={question.id}
          question={question}
          selectedId={selectedId}
          onClickCard={handleClick}
        />
      ))}
    </div>
  );
}

function Card({ question, onClickCard, selectedId }) {
  return (
    <div
      onClick={() => onClickCard(question.id)}
      className=" bg-[#f7f7f7] border-2 border-[#e7e7e7] rounded-md flex items-center justify-center text-center cursor-pointer p-8"
      style={
        question.id === selectedId
          ? {
              backgroundColor: "#e03131",
              border: "1px solid #e03131",
              color: "#fff",
              fontWeight: "bold",
            }
          : {}
      }
    >
      {question.id === selectedId
        ? `${question.answer}`
        : `${question.question}`}
      {/* {question.question} */}
    </div>
  );
}

export default App;
