import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    padding: '20px'
  }}>
    <h2 style={{ 
      textAlign: 'center', 
      marginBottom: '20px',
      fontWeight: '600'
    }}>
      Pipeline Builder
    </h2>

    <div style={{
      background: 'white',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  </div>
);
}

export default App;