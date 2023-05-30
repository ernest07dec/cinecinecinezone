import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faCheckSquare, faCoffee);

function Footer() {
  return (
    <footer className="container flex justify-between items-center ">
      <div>
        <h2 className="font-extrabold text-3xl ">CINEZONE</h2>
      </div>
      <ul className="flex ">
        <li className="hover:text-yellow-400 px-4">Facebook</li>
        <li className="hover:text-yellow-400 px-4">Instagram</li>
        <li className="hover:text-yellow-400 px-4">Twitter</li>
      </ul>
    </footer>
  );
}

export default Footer;
