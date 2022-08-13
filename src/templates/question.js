import React, { useState } from "react"
import { navigate, Link } from "gatsby"
import { useTransition, animated } from "react-spring"

import Layout from "../components/layout"
import Seo from "../components/seo"
import './Question.css'

const Question = props => {
  const [status, setStatus] = useState(null)

  const transitions = useTransition(status, {
      from: { opacity: 0, transform: 'translateY(10px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0 },
      reverse: status,
    })

  const handleClick = (questionIdx, allAnswers, answer) => {

    if (answer.correct) {
      const score = localStorage.getItem('score')
      setStatus({ message: `Well done!`, correct: true })
      localStorage.setItem('score', questionIdx === 0 ? 1 : Number(score) + 1)
    } else {
      const correctAnswer = allAnswers.find(a => a.correct)
      setStatus({ message: `Sorry the correct answer was '${correctAnswer.value}'`, correct: false })
    }

    setTimeout(() => {
      navigate(idx < 19 ? `/questions/${idx + 2}` : `/summary`)
    }, 2300)
  }

  const { idx, data } = props.pageContext

  return (
    <Layout className="Question">
      <h1>Question: {idx + 1}</h1>
      <p>{data.q}</p>
      <div className="answer-wrap">
        {transitions((styles, item) => (
            item ? (
              <animated.div
                className={`answer ${status.correct ? 'correct' : 'incorrect'}`}
                style={styles}>
                {status?.message}
              </animated.div>
            ) : (
              <animated.div
                className="answer"
                style={styles}>
                {data.a.map((answer, idxA) =>
                  <button
                    className="answer-btn"
                    key={idxA}
                    onClick={() => handleClick(idx, data.a, answer)}>
                    {answer.value}
                  </button>
                )}
              </animated.div>
            )
          )
        )}
      </div>
      <Link className="start-again" to="/">Start again</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Questions" />

export default Question
