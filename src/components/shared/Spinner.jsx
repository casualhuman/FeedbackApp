import spinner from '../assets/spinner.gif'


function Spinner() {
  return (
    <div>
      return <img 
        src={spinner} 
        alt='Loading...'
        style={
            { width: '100px', margin: 'auto', 
        display: 'block'
            }}/>
    </div>
  )
}

export default Spinner
