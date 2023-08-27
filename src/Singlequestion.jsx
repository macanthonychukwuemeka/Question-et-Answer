import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Singlequestion = ({ id, activeId, toggleQuestion, title, info }) => {
  // const [showInfo, setShowInfo] = useState(false)
  const isActive = id === activeId
  // Note: all of them are going to be false because, activeId is null
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}
export default Singlequestion

// import { useState } from "react"
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

// const Singlequestion = ({ title, info }) => {
//   const [showInfo, setShowInfo] = useState(false)

//   return (
//     <article className='question'>
//       <header>
//         <h5>{title}</h5>
//         <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
//           {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </button>
//       </header>
//       {showInfo && <p>{info}</p>}
//     </article>
//   )
// }
// export default Singlequestion
