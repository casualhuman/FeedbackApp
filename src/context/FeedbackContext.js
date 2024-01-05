import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1, 
            text: 'This item is from context 1', 
            rating: 10
        }, 

        {
            id: 2, 
            text: 'This item is from context 2', 
            rating: 6
        },

        {
            id: 3, 
            text: 'This item is from context 3', 
            rating: 3
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


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