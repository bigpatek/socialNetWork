import React from "react";

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>Loading...</div>} >
            <Component {...props} />
        </React.Suspense> ;
    }
}