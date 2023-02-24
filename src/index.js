import ReactDOM from 'react-dom/client';

function App() {
    return (
        <h1>Rick &amp; Morty API</h1>
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);