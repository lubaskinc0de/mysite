import ReactDOM from 'react-dom/client';

import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import About from './components/About';
import TerminalWindow from './components/TerminalWindow';
import Projects from './components/Projects';
import FollowMe from './components/FollowMe';
import Page404 from "./components/Page404";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<TerminalWindow></TerminalWindow>}></Route>
            <Route path='/about/' element={<About></About>}></Route>
            <Route path='/projects/' element={<Projects></Projects>}></Route>
            <Route path='/followme/' element={<FollowMe></FollowMe>}></Route>
            <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
    </HashRouter>
);

