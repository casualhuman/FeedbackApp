import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
// import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'


function FeedbackList() {

    // since we are not prop drilling, we get rid of capturing the feedback prop


    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Yet</p>
    }


    return isLoading ? <Spinner />: (
        <div className="feedback-list">
        <AnimatePresence>
            {feedback.map((item) => (

                <motion.div 
                    key={item.id}
                    initial={{opacity: 1}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <FeedbackItem 
                    key={item.id} 
                    item={item} 
                    // handleDelete={handleDelete}
                    />
                </motion.div>
                
        
            )
            
            )}
        </AnimatePresence>
    </div>
    
    )



//   return (
//     <div className="feedback-list">
//         {feedback.map((item) => (
//             <FeedbackItem 
//                 key={item.id} 
//                 item={item} 
//                 handleDelete={handleDelete}/>
//         )
           
//         )}
//     </div>
//   )
}


// FeedbackList.propTypes = {
//     feedback: PropTypes.array.isRequired, 

// }

export default FeedbackList
