import Card from "./shared/Card"
import RatingsSelect from "./RatingsSelect"
import Button from "./Button"
import {useState} from 'react'


function FeedbackForm({handleAdd}) {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState(' ')

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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Submitted')

        if(text.trim().length > 10){
            const newFeedback = {
                text, 
                rating
            }

            handleAdd(newFeedback)
            setText('')
        }
    }

    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us ?</h2>

            <RatingsSelect select={(rating) => setRating(rating)}/>

            {/* TODO: Create rating select components */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review"/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
    )
}

export default FeedbackForm
