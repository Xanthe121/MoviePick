import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
                <div className="column">
                        <ul className="listUnstyled">
                            <li>FAQ</li>
                            <li>Investor Relations</li>
                            <li>Ways to Watch</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="column">
                        <ul className="listUnstyled">
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="column">
                        <ul className="listUnstyled">
                            <li>Account</li>
                            <li>Privacy</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                     {/* Column4 */}
                  <div className="column">
                        <ul className="list">
                            <li>Media Center</li>
                            <li>Cookie Preference</li>
                            <li>Legal Notice</li>
                        </ul>
                    </div>
        </footer>
    )
}

export default Footer