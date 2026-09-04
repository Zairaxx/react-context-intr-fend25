import { createContext, useState } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({children}) => {
    
      const [user,setUser] = useState({name:"Brandon", age:32});
    
      const navLinks = [{
        text:"Hem",
        url:"/"
      },{
        text: "Kontakta oss",
        url:"/contact"
      }]

      return(

        <SiteContext.Provider value={{user,navLinks}}>
            {children}
        </SiteContext.Provider>
      )
}