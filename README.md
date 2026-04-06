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
git clone https://github.com/AtharvaGawande14/visual-pipeline-builder.git
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

👉 https://drive.google.com/file/d/1pVn_edrA6cFr58hhF3ehLEWle-rdXMSd/view?usp=sharing

---

## 📸 Screenshots

<img width="1853" height="865" alt="Screenshot 2026-04-06 215109" src="https://github.com/user-attachments/assets/01a186a2-1689-4cbf-a074-376d388c382b" />

<img width="1837" height="835" alt="Screenshot 2026-04-06 215122" src="https://github.com/user-attachments/assets/9400222a-49dd-4117-8285-581b4d407113" />



---

## 💡 Future Improvements

* Pipeline execution engine
* Real LLM integration
* Save/load pipelines
* Enhanced graph visualization

---

## 👨‍💻 Author

Atharva Gawande
