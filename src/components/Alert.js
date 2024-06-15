import React from 'react'

export default function Alert(props) {
      // Check if props.alert is not null before accessing its properties
    if (!props.alert) {
        return null; // Return null if props.alert is  null
      }
    const capitalize =(word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    </div>
    
  )
}



