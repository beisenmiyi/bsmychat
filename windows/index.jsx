import ReactDOM from 'react-dom/client';
import Router from './Router';
import ReactModal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

ReactModal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(<>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
</>);