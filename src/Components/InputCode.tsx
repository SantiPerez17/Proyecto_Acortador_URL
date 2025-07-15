import { useState } from "react";

const InputCode = () =>{
    const [code, setCode] = useState('');
    
    const inputStyle = {
        width: '100%',
        height: '40px',
        background: '#333',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
        fontSize: '1.2rem'
    }
    const labelStyle = {
        display: 'block',
        marginBottom: '10px'
    }
    return (
        <div>
            <label className="label" style={labelStyle}>Code</label>
            <input style={inputStyle} type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
    )
}

export default InputCode