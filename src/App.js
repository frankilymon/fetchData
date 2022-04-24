import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { Button, Container, Spinner } from 'react-bootstrap'

import PeopleList from './components/People-list'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState([])
  const [spinnerIsVisible, setSpinnerIsVisible] = useState(false)
  const [isDataEnd, setIsDataEnd] = useState(false)

  const endPoint = `https://swapi.dev/api/people/?page=${page}`

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setSpinnerIsVisible(true)
    try {
      const response = await axios.get(endPoint)
      const { results } = response.data
      if (response.status === 200) {
        setPage(page + 1)
        setData([...data].concat(results))
      }
    } catch (e) {
      console.log(e)
      setIsDataEnd(true)
    }
    setSpinnerIsVisible(false)
  }

  return (
    <Container className="mt-3 mb-3">
      <PeopleList data={data} />
      {spinnerIsVisible && <Spinner animation="border" />}
      {!isDataEnd ? (
        !spinnerIsVisible && <Button onClick={fetchData}>Load More</Button>
      ) : (
        <h3 style={{ color: 'red' }}>no more Data</h3>
      )}
    </Container>
  )
}

export default App
