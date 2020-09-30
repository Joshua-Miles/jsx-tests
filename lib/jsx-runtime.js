export const jsx = (component, { children = [], ...props }) => {
    let result = invoke(component, { ...props, children: array(children) }) 
    let name = component ? component.name : null
    return result
}

export const jsxs = (component, { children = [], ...props }) => {
    let result = invoke(component, { ...props, children: array(children) }) 
    let name = component ? component.name : null
    return result
}

export const Fragment = ({ children }) => {
    return children
}

let invoke = (invokable, ...args) => typeof invokable === 'function' ? invokable(...args) : invokable
let array = arrayable => (Array.isArray(arrayable) ? arrayable : [ arrayable ]).flat(Infinity)