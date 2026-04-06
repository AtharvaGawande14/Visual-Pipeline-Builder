import { useStore } from './store';
import { useState, useRef } from 'react';

export const SubmitButton = () => {

    const edges = useStore((state) => state.edges);

    const [result, setResult] = useState(null);
    const resultRef = useRef(null);

    const handleSubmit = async () => {
        try {
            const pipeline = edges
                .map(edge => `${edge.source}-${edge.target}`)
                .join(",");

            const response = await fetch("http://localhost:8000/pipelines/parse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    pipeline: pipeline
                })
            });

            const data = await response.json();

            setResult(data);

            // Auto scroll to result
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px'
        }}>
            <button 
                onClick={handleSubmit}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: '0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
                Analyze Pipeline
            </button>

            {result && (
                <div 
                    ref={resultRef}
                    style={{
                        marginTop: '15px',
                        padding: '15px',
                        borderRadius: '10px',
                        backgroundColor: '#f5f5f5',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        width: '250px'
                    }}
                >
                    <p><strong>Nodes:</strong> {result.num_nodes}</p>
                    <p><strong>Edges:</strong> {result.num_edges}</p>
                    <p>
                        <strong>DAG:</strong> 
                        <span style={{
                            color: result.is_dag ? 'green' : 'red',
                            marginLeft: '5px'
                        }}>
                            {result.is_dag ? "Yes" : "No"}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};