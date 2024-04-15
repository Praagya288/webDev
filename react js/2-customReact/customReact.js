// forthly the rendering function is defined

function customRender(reactElement , container){

    // const domElement = document.createElement(reactElement.type)

    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target' , reactElement.props.target)

    // container.appendChild(domElement)


    // doing the above same work using for each loop
    const domElement = document.createElement(reactElement.type) 
    domElement.innerHTML = reactElement.children ;
    for(const prop in reactElement.props){
        if(prop === 'children') continue ;
        domElement.setAttribute(prop , reactElement.props[prop])
    }   
    container.appendChild(domElement)
}


// firstly this object is created

const reactElement = {
    type : 'a' ,
    props : {
        href : 'https://google.com' ,
        target : '_blank' ,
    } , 
    children : 'click me to visit google'
}

// secondly root element is selected

const mainContainer = document.querySelector('#root')


// thirdly render function is called

customRender(reactElement , mainContainer)