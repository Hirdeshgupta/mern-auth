import React from "react";
import Nav from "react-bootstrap/Nav";
import SideNavComp from "./SideNavComp";
function NavComp() {
  return (
    <>
      <div className="Nav_container">
        <div className="sideNav">
          <div>
            <SideNavComp />
          </div>
          <div className="Nav-text">BREATHE ESG</div>
        </div>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default NavComp;
