import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

export default function Navbar (){

   return(
       <nav className={styles.navbar}>
           <ul>
               <li className={styles.title}>Altschool</li>

               <li><Link to="/">Home</Link></li>
               <li><Link to="/Contacts">Contact</Link></li>
               <li><Link to="/About">About</Link></li>
               <li><Link to="/user">User</Link></li>


           </ul>
       </nav>
   )
}S