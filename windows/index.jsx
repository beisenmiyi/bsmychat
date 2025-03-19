import ReactDOM from 'react-dom/client';
import Router from './Router';
import WindowHeader from './src/components/WindowHeader/WindowHeader';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(<>
    <WindowHeader />
    <Router />
</>);