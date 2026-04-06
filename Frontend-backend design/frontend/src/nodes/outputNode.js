// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
  <div style={{
  padding: '12px',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.1)',
  backgroundColor: '#c6f4d0',
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

    {/* Left Handle */}
    <Handle
      type="target"
      position={Position.Left}
      id={`${id}-value`}
    />

    {/* Title */}
    <div style={{ marginBottom: '8px' }}>
      <strong style={{ fontSize: '14px' }}>Output</strong>
    </div>

    {/* Inputs */}
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
          value={outputType} 
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
          <option value="File">Image</option>
        </select>
      </label>

    </div>

  </div>
);
}
