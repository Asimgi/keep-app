import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>copy right c {year}</p>
      </footer>
    </>
  );
};
export default Footer;
