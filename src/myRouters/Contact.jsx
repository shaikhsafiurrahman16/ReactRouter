import { useNavigate } from "react-router-dom"

const Contact = () => {
    const navigate = useNavigate();
    const conditionalNav = () => {
        const condition = false;
        if(condition){
            navigate('/')
        } else {
            navigate('/about')
        }
    }
    
  return (
    <div>
      <h2>Contact</h2>
      <br />
      <button onClick={() => conditionalNav()}>Go to Homepage</button>
      <br />
      <button onClick={() => conditionalNav()}>Go to Aboutpage</button>
    </div>
  )
}

export default Contact
