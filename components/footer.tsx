import { Twitter, Mail, Globe } from "lucide-react";
import VisitorCounter from "./visitor-counter";

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">About Postcodes</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive tool for searching postcodes worldwide. Perfect for
              businesses, travelers, and anyone needing accurate location data.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Search by Postcode</a></li>
              <li><a href="#" className="hover:text-foreground">Search by Country</a></li>
              <li><a href="#" className="hover:text-foreground">Search by Location</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="mailto:sales@sldoptions.com" 
                  className="hover:text-foreground flex items-center gap-2"
                  title="Email us"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/DCLjasonx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground flex items-center gap-2"
                  title="Follow us on X"
                >
                  <Twitter className="h-4 w-4" />
                  <span>Follow Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.searchbypostcode.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground flex items-center gap-2"
                  title="Visit our website"
                >
                  <Globe className="h-4 w-4" />
                  <span>Visit Website</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <div className="mb-4">
            <VisitorCounter />
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Postcodes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}