import React, { createContext, useState, useContext } from "react";
import BookingTypeModal from "../components/BookingTypeModal";

const BookingModalContext = createContext({
  open: () => {},
  close: () => {},
});

export const BookingModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <BookingTypeModal onClose={close} />}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => useContext(BookingModalContext);
