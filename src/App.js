
import React from "react"
import "./App.css"
import Header from "./components/header"

import About from "./components/about"

import Interests from "./components/interests"

import Footer from "./components/footer"
export default function APP() {
  return (
    
            <div className="container">
             
                <Header />
                <About />
                <Interests/>
                <Footer/>
            </div>
        )
    }
