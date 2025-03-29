import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>REACT</h1>
     <p>Hello world!</p>
     <u>This is Frontend Project</u><br></br>
     <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis recusandae reiciendis cupiditate eius odio asperiores molestiae, molestias, maxime magni voluptate ex harum amet, maiores earum! Dignissimos ut odio pariatur?</p>
    <b>Hi this is React Project</b> 
    <br></br>
    <br></br>
    <button type="submit">Submit</button>
     </div>
    </>
  );
}

export default App
