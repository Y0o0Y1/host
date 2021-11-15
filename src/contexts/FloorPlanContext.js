import React from 'react'

export const FloorPlanContext = React.createContext()

const FloorPlanContexttProvider = (props) => {
    // States To pass through Children
    return <FloorPlanContext.Provider
        value={{}}
    >
        {props.children}
    </FloorPlanContext.Provider>
}
export default FloorPlanContexttProvider;
