import Singlequestion from "./singlequestion"

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Singlequestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}
export default Questions

// import Singlequestion from "./singlequestion"
// const Questions = ({ questions }) => {
//   return (
//     <section className='container'>
//       <h1>Questions</h1>
//       {questions.map((question) => {
//         return <Singlequestion key={question.id} {...question} />
//       })}
//     </section>
//   )
// }
// export default Questions
