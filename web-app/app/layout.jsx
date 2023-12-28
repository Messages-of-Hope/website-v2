import React from "react"

// Global styles
import "@/src/fonts/fonts.css";
import "@/src/globals.css";

// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Page metadata
export const metadata = {
  title: {
    template: "%s | Messages of Hope",
    default: "Messages of Hope",
    absolute: "Messages of Hope"
  },
  description: "Collecting your messages of hope and spreading them far and wide.",
  keywords: ["Mental Health", "Mental Illness", "BPD", "MOH", "Messages of Hope", "Hope"],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  }
};

import Header from "@/src/components/ui/Header/Header.jsx";
import MessageButton from "@/src/components/ui/MessageButton.jsx";
import Footer from "@/src/components/ui/Footer/Footer.jsx";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        {/* <MessageButton/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
};
export default RootLayout;
