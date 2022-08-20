import React from "react";

function SocialMedia() {
  function Animation() {
    let navLinks = document.querySelectorAll(".social-media a");

    navLinks.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate(${attrX}px, ${attrY}px)`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  }
  return (
    <div className="social-media">
      <ul className="content">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={Animation}
        >
          <li>
            <i class="fa-brands fa-linkedin-in"></i>
          </li>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={Animation}
        >
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={Animation}
        >
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default SocialMedia;
