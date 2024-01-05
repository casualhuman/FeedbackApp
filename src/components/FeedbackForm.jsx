import Card from "./shared/Card"
import RatingsSelect from "./RatingsSelect"
import Button from "./Button"
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"


function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const{addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        // console.log('hello')

        if(feedbackEdit.edit === true){
            console.log(feedbackEdit.edit)
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

        // console.log(feedbackEdit.edit)
        // setBtnDisabled(false)
        // setText([...text])
    }, [feedbackEdit])

    const handleTextChange = (e) => {

        if(text === ' '){
            setBtnDisabled(true)
            setMessage(null)
            
        } else if (text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }

        // console.log(e.target.value)
        setText(e.target.value)
        // console.log(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Submitted')

        if(text.trim().length > 10){
            const newFeedback = {
                text, 
                rating
            }

            // handleAdd(newFeedback)
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else{
                addFeedback(newFeedback)
            }
           

            setText('')
            // setRating(10)
            // console.log(text)
            
        }
    }

    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us ?</h2>

            <RatingsSelect select={(rating) => setRating(rating)}/>

            {/* TODO: Create rating select components */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
    )
}

export default FeedbackForm
