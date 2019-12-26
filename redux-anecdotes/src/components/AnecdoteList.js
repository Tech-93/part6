import React from 'react'
import { connect } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Notification from './Notification'
import Filter from './Filter'



const AnecdoteList = (props) => {

    //const anecdotes = props.anecdotes.sort((a,b) => b.votes - a.votes)
    //const displayAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(props.filter))
    

    const handleVote = (id) => {
        console.log('vote', id)
        props.increaseVote(id)

        const votedAnecdote = props.anecdotesToShow.find(anecdote => anecdote.id === id)
        props.setNotification(votedAnecdote.content, 5)
        
        
        
      }

      


      

    return (
        <div>
            
            <Notification />

            <Filter  />

            <h2>Anecdotes</h2>

            {props.anecdotesToShow.map(anecdote =>
            <div key={anecdote.id}>
                <div> {anecdote.content}</div>
            <div> has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)} >vote</button>
            </div>
            </div>
            )}
        </div>
    )
}






const visibleAnecdotes = ({anecdotes, filter}) => {
  anecdotes.sort((a,b) => b.votes - a.votes)
  const displayAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
  return displayAnecdotes
}





const mapStateToProps = (state) => {

    return {
      anecdotesToShow: visibleAnecdotes(state)
    }
  }

  const mapDispatchToProps = {
    increaseVote,
    setNotification
  }
  

  const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList