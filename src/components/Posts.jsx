import {Navigate, useNavigate, useParams, Route, Routes} from 'react-router-dom'

function Posts() {

    const params = useParams()

    const status = 200

    const navigate = useNavigate()

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }

    if (status === 404){
        return <Navigate to='/notfound' />
    }

  return (
    <div>

        <h1>Post {params.id}</h1>
        <p>Name: {params.name}</p>
        <button onClick={onClick}>Click Me</button>

        <Routes>
            <Route exact path='show' element={<h1>Hi this is a show page</h1>}/>
        </Routes>
    </div>
  )
}

export default Posts
