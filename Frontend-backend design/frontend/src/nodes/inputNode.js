// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
  <div style={{
  padding: '12px',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.1)',
  backgroundColor: '#d3eafa',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  width: '180px',
  transition: '0.2s ease',
  cursor: 'pointer'
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'scale(1.03)';
  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'scale(1)';
  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
}}
>
    
    <div style={{ marginBottom: '8px' }}>
      <strong style={{ fontSize: '14px' }}>Input</strong>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      
      <label style={{ fontSize: '12px', color: '#555' }}>
        Name
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange}
          style={{
            width: '100%',
            padding: '5px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginTop: '3px'
          }}
        />
      </label>

      <label style={{ fontSize: '12px', color: '#555' }}>
        Type
        <select 
          value={inputType} 
          onChange={handleTypeChange}
          style={{
            width: '100%',
            padding: '5px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginTop: '3px'
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>

    </div>

    <Handle
      type="source"
      position={Position.Right}
      id={`${id}-value`}
    />
  </div>
);
}
