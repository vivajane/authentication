
import Button from "./components/Button";
import Header from "./components/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        
        <main>{children}</main>
      </body>
    </html>
  );
}
