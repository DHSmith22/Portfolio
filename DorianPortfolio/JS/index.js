const getElement = (selector) => {

    const element = document.querySelector(selector);
    if(element) return element
    throw Error('Please double check your class names, there is no ${selector} class')
}


