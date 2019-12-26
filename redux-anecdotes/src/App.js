import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { initialAnecdotes } from './reducers/anecdoteReducer'

const App = ({initialAnecdotes}) => {
  

  useEffect(() => {
    initialAnecdotes()
    }, [initialAnecdotes])


  return (
    <div>
    
      <AnecdoteList  />
      <AnecdoteForm  />

    </div>
  )
}

export default connect(null, { initialAnecdotes })(App)