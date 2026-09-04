import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"

const Navigation = () => {

    const {navLinks, user} = useContext(SiteContext);

return(
    <nav>
        {navLinks.map((link)=> <li><a href={link.url}>{link.text}</a></li> )}
        <li><a href="/profile">{user.name}s Profil</a></li>
    </nav>
        )
}

export default Navigation