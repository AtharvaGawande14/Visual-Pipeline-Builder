from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()   #  THIS MUST BE BEFORE middleware

#  CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    edges_input = pipeline.split(",")

    graph = {}
    nodes = set()

    for edge in edges_input:
        src, dest = edge.split("-", 1)
        nodes.add(src)
        nodes.add(dest)

        if src not in graph:
            graph[src] = []
        graph[src].append(dest)

    num_nodes = len(nodes)
    num_edges = len(edges_input)

    visited = set()
    rec_stack = set()

    def has_cycle(node):
        if node in rec_stack:
            return True
        if node in visited:
            return False

        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph.get(node, []):
            if has_cycle(neighbor):
                return True

        rec_stack.remove(node)
        return False

    is_dag = True
    for node in nodes:
        if has_cycle(node):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }