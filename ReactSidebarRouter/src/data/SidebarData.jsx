import { User,Wallet,Book,Wrench } from 'lucide-react'
const SidebarData = [
    {
        title:"Home",
        path:"/",
        icon:<Wallet />,
    },
    {
        title:"Manage Books",
        path:"/manage-books",
        icon:<Book />,
    },
    {
        
        title:"Profile",
        path:"/profile",
        icon:<User />,
        
    },
    {
        title:"Settings",
        path:"/settings",
        icon:<Wrench />,
    },

]
export default SidebarData;