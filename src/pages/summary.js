import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Summary = () => {
  const [score, setScore] = useState(0)

  useEffect(() => {
    setScore(localStorage.getItem('score'))
  }, [])

  return (
    <Layout>
      Well done!<br />Your score was...
      <div className="Result">
        <span className="number">
          <span>{score}</span>
        </span>
        <span className="number">
          <span>20</span>
        </span>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Summary" />

export default Summary
