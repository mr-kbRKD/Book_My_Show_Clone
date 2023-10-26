import React from 'react';

export function NextArrow(props){
return (
    <>
    {/* basically meaning of this code is whatever className style or onclick we r using in component take them here */}
        <div 
        className={props.className}
        style = {{...props.style}}
        onClick = {props.onClick} 
            />
    </>
)
}


export function PrevArrow(props){
    return (
        <>
        {/* basically meaning of this code is whatever className style or onclick we r using in component take them here */}
            <div 
            className={props.className}
            style = {{...props.style}}
            onClick = {props.onClick} 
                />
        </>
    )
    
}