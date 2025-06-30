import "../styles/tailwind.css";
import "../styles/slick.css";
import "../styles/globals.css";

import { BookingModalProvider } from "../context/BookingModalContext";

function MyApp({ Component, pageProps }) {
  return (
    <BookingModalProvider>
      <Component {...pageProps} />
    </BookingModalProvider>
  );
}

export default MyApp;
