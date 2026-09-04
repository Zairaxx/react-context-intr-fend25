import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"
import Navigation from "./Navigation"
const Header = ()=>{

    const {user} = useContext(SiteContext);

    return(
    <header>
        <h3>Välkommen {user.name}</h3>
        <Navigation />
    </header>)
}

export default Header