import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const root = document.createElement("div");
root.id = "user-3-0-sentiments-content-view-root";
document.body.append(root);

ReactDOM.createRoot(root).render(<App />);