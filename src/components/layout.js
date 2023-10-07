import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  // JavaScript for the chat box
        const chatBox = document.getElementById("chat-box");
        const chatHeader = document.getElementById("chat-header");
        const chatContent = document.getElementById("chat-content");
        const chatInput = document.getElementById("chat-input");

        // Toggle chat box visibility
        chatHeader.addEventListener("click", () => {
            chatBox.classList.toggle("active");
            chatContent.scrollTop = chatContent.scrollHeight; // Scroll to the bottom when expanded
        });

        // Handle sending a message (you can customize this)
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && chatInput.value.trim() !== "") {
                const message = chatInput.value;
                chatInput.value = ""; // Clear the input field
                appendMessage("You", message); // Add your message to the chat
            }
        });

        // Function to append a message to the chat
        function appendMessage(sender, message) {
            const messageElement = document.createElement("div");
            messageElement.textContent = `${sender}: ${message}`;
            chatContent.appendChild(messageElement);
            chatContent.scrollTop = chatContent.scrollHeight; // Scroll to the bottom
        }
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
          <div id="chat-box">
        <div className="chat-header">Chat</div>
        <div className="chat-content"></div>
        <input type="text" className="chat-input" placeholder="Type a message..."></input>
    </div>
      </footer>
    </div>
  )
}

export default Layout
