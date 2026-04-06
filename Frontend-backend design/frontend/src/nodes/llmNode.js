// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
  <div style={{
  padding: '12px',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.1)',
  backgroundColor: '#efd6f9',
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

    {/* Left Handles */}
    <Handle
      type="target"
      position={Position.Left}
      id={`${id}-system`}
      style={{ top: '30%' }}
    />
    <Handle
      type="target"
      position={Position.Left}
      id={`${id}-prompt`}
      style={{ top: '70%' }}
    />

    {/* Title */}
    <div style={{ marginBottom: '8px' }}>
      <strong style={{ fontSize: '14px' }}>LLM</strong>
    </div>

    {/* Content */}
    <div style={{
      fontSize: '12px',
      color: '#555',
      lineHeight: '1.4'
    }}>
      Processes input using a language model.
    </div>

    {/* Right Handle */}
    <Handle
      type="source"
      position={Position.Right}
      id={`${id}-response`}
    />
  </div>
);
}
