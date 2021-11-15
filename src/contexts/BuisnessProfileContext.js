import React from 'react'

export const BusinessProfileContext = React.createContext()

const BusinessProfileContextProvider = (props) => {
    // States To pass through Children
    return <BusinessProfileContext.Provider
        value={{}}
    >
        {props.children}
    </BusinessProfileContext.Provider>
}
export default BusinessProfileContextProvider;
