import React from "react";

export default function Contact() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/_furquan09_", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9373929396", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/", "_blank");
  };

  return (
    <div className="section" id="contact">
      <h2 className="text-center text-info my-3">Let's Connect</h2>
      <div
        className="container"
        style={{
          border: "2px solid #b5f7ff",
          borderRadius: "10px",
          borderWidth: "2px",
        }}
      >
        <div className="container d-flex justify-content-center align-items-center my-3">
          <img src="email.png" alt="Email Logo" style={{ height: "30px" }} />
          <span className="fs-2 mx-2" style={{ color: "#b5f7ff" }}>
            Email
          </span>
        </div>
        <div className="ontainer d-flex justify-content-center align-items-center">
          <p className="fs-6" style={{ color: "#b5f7ff" }}>
            mdfurquan9373@gmail.com
          </p>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <a className="fs-5"href="mailto:mdfurquan9373@gmail.com">Send Mail</a>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center my-4">
        <button
          type="button"
          className="btn-sm btn btn-outline-info text-center mx-1"
          onClick={handleInstagramClick}
        >
          <img src="instagram.svg" alt="Instagram-Icon" /> Instagram
        </button>
        <button
          type="button"
          className="btn-sm btn btn-outline-info text-center mx-1"
          onClick={handleWhatsAppClick}
        >
          <img src="whatsapp.svg" alt="WhatsApp-Icon" /> WhatsApp
        </button>
        <button
          type="button"
          className="btn-sm btn btn-outline-info text-center mx-1"
          onClick={handleLinkedInClick}
        >
          <img src="linkedin.svg" alt="LinkedIn-Icon" /> LinkedIn
        </button>
      </div>
    </div>
  );
}
