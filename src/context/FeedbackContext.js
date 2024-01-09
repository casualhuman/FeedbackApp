import {createContext, useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

   
    const fetchFeedback = async() => {
        const res = await fetch('http://localhost:5000/feedback');
        const data = await res.json()
    
        setFeedback(data)
        
    
    }

    useEffect(() => {
        fetchFeedback()

    }, [])


    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete ?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {

        newFeedback.id = uuidv4()
        // console.log(newFeedback)

        setFeedback([newFeedback, ...feedback])
    }


    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit ({
            item, 
            edit: true
        })
    }

    // update feedback item 
    const updateFeedback = (id, updatedItem) => {
        // console.log(id, updatedItem)
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item))
    }



    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext