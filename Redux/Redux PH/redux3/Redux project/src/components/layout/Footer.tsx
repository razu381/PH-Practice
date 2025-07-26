import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t bg-muted py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </span>
        <nav className="flex space-x-6">
          <a href="#" className="text-sm hover:underline text-muted-foreground">
            Home
          </a>
          <a href="#" className="text-sm hover:underline text-muted-foreground">
            About
          </a>
          <a href="#" className="text-sm hover:underline text-muted-foreground">
            Services
          </a>
          <a href="#" className="text-sm hover:underline text-muted-foreground">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
