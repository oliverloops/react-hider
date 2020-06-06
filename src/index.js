/*
    React Hider || V0.1.1 || MIT License || Made in Home with ❤️
*/
import React from 'react'
/*
    Main Component 
    --> state (Boolean Status)
    --> children (Child node/nodes)
*/
const Hider = ({ state, children }) => {
    // DOM's node counting inside Global Component
    const count = React.Children.count(children)
    // Show/Hide a single element based on boolean status
    if (count === 1) {
        return (
            <>
                {state && <>{children}</>}
            </>
        )
    }
    // Show/Hide elements based on component's boolean status
    else if (count === 2) {
        return (
            <>
                {state ? (
                    <>{children[0]}</>
                ) : (
                    <>{children[1]}</>
                )}
            </>
        )
    }
    // Nothing is returned if there are n = 0 OR n > 2 children nodes
    else {
        return <></>
    }
}
//Export default module "d(^o^)p"
export default Hider
