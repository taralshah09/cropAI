import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/' style={{textDecoration:"none",color:"white"}}><h2>Logo</h2></Link>
        <ul>
            <Link to='/khet' style={{textDecoration:"none",color:"white"}}>Khet</Link>
            <Link to='/rain' style={{textDecoration:"none",color:"white"}}>Rain</Link>
            <Link to='/chat'style={{textDecoration:"none",color:"white"}}>Chat</Link>
        </ul>
    </nav>
  )
}

export default Navbar
