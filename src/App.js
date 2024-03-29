import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import Posts from './components/Posts'
import { FeedbackProvider } from './context/FeedbackContext'

import AboutPage from './components/pages/AboutPage'
import Card from './components/shared/Card'

function App() {

    // const [feedback, setFeedback] = useState(FeedbackData)

    // const addFeedback = (newFeedback) => {

    //     newFeedback.id = uuidv4()
    //     // console.log(newFeedback)

    //     setFeedback([newFeedback, ...feedback])
    // }


    // const deleteFeedback = (id) => {
    //     if(window.confirm('Are you sure you want to delete ?')){
    //         setFeedback(feedback.filter((item) => item.id !== id))
    //     }
    // }
    

    return (

    <FeedbackProvider>

   <Router>
    
        <Header text = 'Feedback UI'/>


        <div className="container">

        <Routes>
            <Route
                exact 
                path = '/'
                element={
                    <>
                        <FeedbackForm 
                            // handleAdd={addFeedback} 
                            />
                        <FeedbackStats 
                            // feedback={feedback}
                            />
                        <FeedbackList 
                            // feedback={feedback} 
                            // handleDelete={deleteFeedback}
                            />
                        <AboutIconLink />
                        
                    </>
                }
            >
                
            </Route>


            <Route 
                path='/about'
                element={
                    <>
                    <Card>
                        <AboutPage />
                    </Card>
                    </>
                }
            >
                
            </Route>

            <Route 
                exact 

                path='/post/:id/:name/*'
                element={
                    <>
                        <Posts />
                    </>
                }
            >
                
            </Route>

        </Routes>
        
        </div>

        
    
   </Router>
   </FeedbackProvider>

    )
}

export default App
