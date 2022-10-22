import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import AboutApp from './routes/AboutApp';
import WebBusinessApp from './routes/WebBusinessApp';
import DataServiceApp from './routes/DataServiceApp';
import ArchiveApp from './routes/ArchiveApp';
import Content from './components/Content';
import ArchiveContent from './components/ArchiveContent'

// ReactDOM.render(<App/>, document.getElementById("root"))

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/about" element={<AboutApp />} />
                <Route path="/webBusiness" element={<WebBusinessApp />} />
                <Route path="/dataService" element={<DataServiceApp />} />
                <Route path="/archive" element={<ArchiveApp />}>
                    <Route path="/archive/about" element={<ArchiveContent/>} />
                </Route>
            </Route>
        </Routes>
    </Router>,
    rootElement
);