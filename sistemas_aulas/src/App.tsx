/* import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

//gpl = facilita a visualização das querys, sem isso fica tudo em amarelo
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const {data} = useQuery<{lessons: Lesson[] }>(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
 */
import { Event } from "./pages/Event"

function App () {
  return (
    <div>
      <Event/>
    </div>
  )
}

export default App


