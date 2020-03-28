import React from "react"
import { Link } from "gatsby"
import Header from "./Header/Header";
import "./layout.scss";
import "./../styles/utils.scss";
import "./../styles/resets.scss";
export default ({ children }) => (
  <div>
    <Header />
    <main className="container">
      {children}
    </main>

  </div>
)