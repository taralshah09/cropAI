import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/' style={{textDecoration:"none",color:"white"}}><img src="./images/logo2.png"style={{width:"70px"}}/></Link>
        <ul>
            <Link to='/disease' style={{textDecoration:"none",color:"white"}}>Disease</Link>
            <Link to='/info' style={{textDecoration:"none",color:"white"}}>Info</Link>
            <Link to='/harvest'style={{textDecoration:"none",color:"white"}}>Harvest</Link>
        </ul>
    </nav>
  )
} 

export default Navbar
