import React from "react"

function TextField({ labelProps, label, ...inputProps }) {
  return (
    <label style={{width: '100%', boxSizing: 'border-box'}} {...labelProps}>
      <span>{label}</span>
      {inputProps.rows ? (
        <textarea style={{width: '100%', boxSizing: 'border-box'}} {...inputProps} />  
      ) : (
        <input style={{width: '100%', boxSizing: 'border-box'}} {...inputProps} />
      )}
    </label>
  )
}

export default TextField