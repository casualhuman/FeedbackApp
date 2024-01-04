import Card from "../shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (

    <Card>
        <div>
            <h1>About This Website</h1>
            <p>This is a react app that takes in comments from users</p>
    
            <Link to='/'>Go to Home</Link>
        </div>
    </Card>
    
  )
}

export default AboutPage
