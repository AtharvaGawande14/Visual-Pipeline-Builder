# 🚀 Visual Pipeline Builder

## 📌 Overview

This project is a visual pipeline builder that allows users to create workflows using a drag-and-drop interface. Users can connect different nodes to form a pipeline and analyze its structure in real time.

---

## 🧠 Features

* Drag-and-drop pipeline creation
* Multiple node types:

  * Input Node
  * LLM Node
  * Output Node
  * Text Node
* Visual connections using edges
* Real-time pipeline analysis
* Displays:

  * Number of nodes
  * Number of edges
  * DAG (Directed Acyclic Graph) validation

---

## 🛠 Tech Stack

### Frontend

* React
* React Flow
* Zustand

### Backend

* FastAPI (Python)

---

## 🎨 UI Highlights

* Modern card-based node design
* Color-coded nodes:

  * Input → Light Blue
  * LLM → Light Purple
  * Output → Light Green
  * Text → Light Yellow
* Smooth hover animations (scale + shadow)
* Background grid, MiniMap, and controls

---

## 🔗 How It Works

1. Users drag and drop nodes onto the canvas
2. Nodes are connected using edges
3. The pipeline structure is converted into a string format
4. The frontend sends this data to the backend
5. Backend analyzes the pipeline and returns:

   * Node count
   * Edge count
   * Whether it is a DAG

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/visual-pipeline-builder.git
cd visual-pipeline-builder
```

---

### 2. Run Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

### 3. Run Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🎥 Demo

👉 Add your demo video link here (Google Drive / YouTube)

---

## 📸 Screenshots

👉 Add 2–3 screenshots here

---

## 💡 Future Improvements

* Pipeline execution engine
* Real LLM integration
* Save/load pipelines
* Enhanced graph visualization

---

## 👨‍💻 Author

Atharva Gawande
