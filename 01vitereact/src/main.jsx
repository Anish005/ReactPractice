import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//we can call jsx directly from below  we can do it instead of react CreateElement but a bit complicated go to open source
//https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js
//import {jsx as _jsx} from 'react/jsx-runtime.js'
function MyApp() {
    return(
        <div>
            <h1>custom app verfication</h1>
        </div>
    )
    
}
//end of the day MyApp is parsed as below in reactElement
const reactElement =  {
    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank'

    },
    children:'Click me to visit google'
}
// after creating all the tree at last the variable injection is performed
const anotherUser = 'ramesh sharma'

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)
//making reactElement according to the react format that is expected not as above custom made
// react have a method called createElement that gives us an object, first args - tag, second - obj,third - evaluated expression
//babel injects in the createElement
const reactElement1 = React.createElement(
    'a',
    {href:'https://google.com' , target:'_blank'},
    'Click me to visit google',
    anotherUser // we cant write condtionals here as it is evaluated expression

)
//createRoot -- behind the scenes its create a dom like structure like browser then compares the main dom with it to update the necessary things  
//pageReload -- due to the main dom painting again like while using the JS
ReactDOM.createRoot(document.getElementById('root')).render(

        //<App /> 
        // <reactElement /> // it expects a function but we are giving an object  and also here we are not writing custom react
        //<MyApp /> // we can also write this as MyApp() but not conventional to write for proffessional purpose
        //anotherElement // we get the result as we were expecting from the reactElement as render expects the req syntax
        reactElement1  // works fine as it is in the norms of the react         
)
