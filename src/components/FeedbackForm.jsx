import Card from "./shared/Card"
import RatingsSelect from "./RatingsSelect"
import Button from "./Button"
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"


function FeedbackForm() {

    const [text, setText] = useState('')
    const [username, setUserName] = useState('')
    const [usernameDisabled, setUserNameDisabled] = useState(false)
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [message, setMessage] = useState('')
    
    const{addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        // console.log('hello')

        if(feedbackEdit.edit === true){
            console.log(feedbackEdit.edit)
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setUserName(feedbackEdit.item.username)
            setRating(feedbackEdit.item.rating)
            setUserNameDisabled(true)
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
    
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Submitted')

        if(text.trim().length > 10){
            const newFeedback = {
                username,
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
            setUserName('')
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
                <div className="input-group-item">
                    <input onChange={handleUserNameChange} type="text" 
                        placeholder="Please Enter Your Name" 
                        value={username} 
                        required
                        disabled={usernameDisabled} />
                </div>

                <div className="input-group-item">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                </div>

                <div className="input-group-item form-button">
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                
                
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
    )
}

export default FeedbackForm
