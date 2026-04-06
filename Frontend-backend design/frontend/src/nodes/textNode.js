// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
  <div style={{
  padding: '12px',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.1)',
  backgroundColor: '#f2f9c0',
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

    {/* Title */}
    <div style={{ marginBottom: '8px' }}>
      <strong style={{ fontSize: '14px' }}>Text</strong>
    </div>

    {/* Input */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      
      <label style={{ fontSize: '12px', color: '#555' }}>
        Text
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange}
          style={{
            width: '100%',
            padding: '5px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginTop: '3px'
          }}
        />
      </label>

    </div>

    {/* Right Handle */}
    <Handle
      type="source"
      position={Position.Right}
      id={`${id}-output`}
    />
  </div>
);
}
