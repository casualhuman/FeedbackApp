import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    // console.log(handleDelete)
  return (

    <Card>    
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)}
        className="close"><FaTimes color='purple'/></button>

        <button 
          onClick={() => editFeedback(item)}
          className="edit"><FaEdit color='purple'/></button>
        
        <div>{item.username} says</div>
        <div className="text-display">" <i>{item.text}</i> "</div>
    </Card>
   
  )
}


FeedbackItem.propTypes = {
    item: PropTypes.object
}

export default FeedbackItem
