import React from 'react'
import './Inputfield.css'
function Inputfield({name,type,callbackobject,callbackname,callbackfunctionOnchange}) {
	function changehandle(val)
	{
		if (!callbackobject) return;
		callbackobject[callbackname] = val.target.value
	}
	if (!callbackfunctionOnchange) callbackfunctionOnchange = changehandle
  return (
    <div className="input-field">
        <input placeholder={name} type={type} onChange={callbackfunctionOnchange}/>
    </div>
  )
}

export default Inputfield