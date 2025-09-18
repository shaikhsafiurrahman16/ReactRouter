import { useLocation } from "react-router-dom"

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h2 color='white'>Home</h2>
    </div>
  )
}

export default Home
