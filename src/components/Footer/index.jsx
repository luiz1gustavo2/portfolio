import React from "react";
import Logo from "../Logo";
import LogoWhite from "../Logo-white";

function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <LogoWhite />
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            
          </div>
        </div>
        <div>
          <p>Feito por mim com muito carinho</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
