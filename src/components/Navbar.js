import React from 'react'
import { Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProjectPage from './ProjectPage';
import Contact from './Contact';
import Home from './Home';

const LOCAL_STORAGE_KEY = "PAGE.LOCAL.STORAGE";

function Navbar() {
    const [page, setPage] = useState("home");

    const navClickHandler = (selectedKey) => {

        switch(selectedKey) {
            case "contact":
                setPage("contact")
                break;
            case "project-page":
                setPage("project-page")
                break;
            default:
                setPage("home")
        } 
    }
    useEffect(() => {
            const page = localStorage.getItem(LOCAL_STORAGE_KEY);
            if(page) setPage(page);
            else setPage("home");
    
      }, [])
    useEffect(() => {
        
        localStorage.setItem(LOCAL_STORAGE_KEY, page)
    }, [page])

    const renderPage = (page) => {
        switch(page) {
            case "contact":
                return <Contact/>
            case "project-page":
                return <ProjectPage/>
            default:
                return <Home/>
        } 
    }
    return(
        <div>
        <Nav variant="tabs" onSelect={(selectedKey) => navClickHandler(selectedKey)}>
            <Nav.Item>
                <Nav.Link eventKey="home">Comparator Functions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="project-page">Comparator Project Page</Nav.Link>
            </Nav.Item>
        </Nav>
        {renderPage(page)}
        </div>
    )
}
export default Navbar;