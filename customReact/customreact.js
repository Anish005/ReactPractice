function customRender(reactElement,container) { //how the rendering of react acts in the background
    /*const domElement = document.createElement
    (reactElement.type)//as createElement takes the direct tags but we are passing by the reactElements types(custom)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (let prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
// the underlying working inside the react by creating a tree graph 
const reactElement =  {
    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank'

    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
