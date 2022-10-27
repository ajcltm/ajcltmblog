import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import AboutApp from './routes/AboutApp';
import WebBusinessApp from './components/webBusinessApp/WebBusinessApp';
import WebBusinessContentTheme from './components/webBusinessApp/WebBusinessContentTheme';
import WebBusinessContentContact from './components/webBusinessApp/WebBusinessContentContact';
import WebBusinessContentThemeHubble from './components/webBusinessApp/theme/hubble/WebBusinessContentThemeHubble';
import DataServiceApp from './routes/DataServiceApp';
import ArchiveApp from './components/archiveApp/ArchiveApp';
import ArchiveContent from './components/archiveApp/ArchiveContent'
WebBusinessContentThemeHubble

// ReactDOM.render(<App/>, document.getElementById("root"))

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/about" element={<AboutApp />} />
                <Route path="/webBusiness" element={<WebBusinessApp />}>
                    <Route path="/webBusiness/theme" element={<WebBusinessContentTheme />} />
                    <Route path="/webBusiness/contact" element={<WebBusinessContentContact />} />
                </Route>
                <Route path="/dataService" element={<DataServiceApp />} />
                <Route path="/archive" element={<ArchiveApp />}>
                    <Route path="/archive/about" element={<ArchiveContent/>} />
                </Route>
            </Route>
            <Route path="/webBusiness/theme/hubble" element={<WebBusinessContentThemeHubble />} />
        </Routes>
    </Router>,
    rootElement
);