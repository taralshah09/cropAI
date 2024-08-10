import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/' style={{textDecoration:"none",color:"white"}}><img src="./images/logo_with_no_bg.png"style={{width:"150px",height:"40px"}}/></Link>
        <ul>
            <Link to='/disease' style={{textDecoration:"none",color:"white"}}>Disease</Link>
            <Link to='/info' style={{textDecoration:"none",color:"white"}}>Info</Link>
            <Link to='/care'style={{textDecoration:"none",color:"white"}}>Care</Link>
            <Link to='/harvest'style={{textDecoration:"none",color:"white"}}>Harvest</Link>
        </ul>
    </nav>
  )
} 

export default Navbar
