import React, {useState} from 'react'
import { Link } from "react-router-dom"
import '../Css/Navbar.css'

function Navbar() {

  const [hover,setHover] = useState('')
  const [style,setStyle] = useState({})

  const mouseOverHandle = (shape) =>{
    setHover('hovered')
    setStyle({borderRadius: shape})
  }

  return (
    <div className='Navbar'>
      <div className='Logo'>Harshil Vaghani</div>
      <div className='Tabs'>
        <Link to={"/"}
          className={`Link ${hover}`}
          onMouseOver={() => mouseOverHandle("4em 2em 3em 1em")}
          style={style}
        >
          Home
        </Link>
        <Link to={"/about"} 
          className={`Link ${hover}`}
          onMouseOver={() => mouseOverHandle("1em 3em 2em 4em")}
          style={style}
          >
          About
        </Link>
        <Link to={"/skills"} 
          className={`Link ${hover}`}
          onMouseOver={() => mouseOverHandle("4em 1em 3em 2em")}
          style={style}
          >
          Skills
        </Link>
        <Link to={"/projects"} 
          className={`Link ${hover}`}
          onMouseOver={() => mouseOverHandle("4em 5em 3em 6em")}
          style={style}
          >
          Projects
        </Link>
        <Link to={"/contact"} 
          className={`Link ${hover}`}
          onMouseOver={() => mouseOverHandle("4em 3em 6em 5em")}
          style={style}
          >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar