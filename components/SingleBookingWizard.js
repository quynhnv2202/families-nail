"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Check,
  Clock,
  DollarSign,
  ChevronLeft,
  ChevronRightIcon,
} from "lucide-react";

const SingleBookingWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceStaffAssignments, setServiceStaffAssignments] = useState({});
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: new Date(),
    time: null,
  });
  const [expandedCategories, setExpandedCategories] = useState({});
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const router = useRouter();

  const serviceCategories = {
    "NAIL EXTENSIONS": [
      { id: 1, name: "Acrylic Full Set", duration: "75 minutes", price: 65 },
      { id: 2, name: "Bio Gel Full Set", duration: "75 minutes", price: 65 },
      { id: 3, name: "Dip Powder Full Set", duration: "90 minutes", price: 70 },
      { id: 4, name: "Gel X Full Set", duration: "90 minutes", price: 75 },
    ],
    PEDICURE: [
      {
        id: 5,
        name: "Fam Pedicure & Regular Polish",
        duration: "60 minutes",
        price: 45,
      },
      {
        id: 6,
        name: "Fam Pedicure & Gel Polish",
        duration: "60 minutes",
        price: 55,
      },
      {
        id: 7,
        name: "Premium Pedicure & Regular Polish",
        duration: "60 minutes",
        price: 70,
      },
      {
        id: 8,
        name: "Premium Pedicure Gel Polish",
        duration: "60 minutes",
        price: 80,
      },
      {
        id: 9,
        name: "Polish Change & Regular Polish",
        duration: "30 minutes",
        price: 20,
      },
      {
        id: 10,
        name: "Polish Change & Gel Polish",
        duration: "30 minutes",
        price: 35,
      },
    ],
    MANICURE: [
      { id: 11, name: "Classic Manicure", duration: "45 minutes", price: 35 },
      { id: 12, name: "Gel Manicure", duration: "60 minutes", price: 45 },
      { id: 13, name: "French Manicure", duration: "50 minutes", price: 40 },
      { id: 14, name: "Luxury Manicure", duration: "75 minutes", price: 60 },
    ],
    "REMOVAL/ REPAIR": [
      { id: 15, name: "Gel Removal", duration: "30 minutes", price: 15 },
      { id: 16, name: "Acrylic Removal", duration: "45 minutes", price: 20 },
      {
        id: 17,
        name: "Nail Repair (per nail)",
        duration: "15 minutes",
        price: 8,
      },
      { id: 18, name: "Shape & File", duration: "20 minutes", price: 12 },
    ],
    "KID SERVICE (UNDER 10 YEARS OLD)": [
      { id: 19, name: "Kids Manicure", duration: "30 minutes", price: 25 },
      { id: 20, name: "Kids Pedicure", duration: "30 minutes", price: 30 },
      { id: 21, name: "Kids Nail Art", duration: "20 minutes", price: 15 },
    ],
    "WAXING & TINTING": [
      { id: 22, name: "Eyebrow Waxing", duration: "20 minutes", price: 25 },
      { id: 23, name: "Upper Lip Waxing", duration: "15 minutes", price: 15 },
      { id: 24, name: "Eyebrow Tinting", duration: "25 minutes", price: 30 },
      { id: 25, name: "Eyelash Tinting", duration: "30 minutes", price: 35 },
    ],
  };

  const staffMembers = [
    {
      id: "anyone",
      name: "Anyone Available",
      isDefault: true,
    },
    {
      id: 1,
      name: "Sarah Johnson",
    },
    {
      id: 2,
      name: "Maria Garcia",
    },
    { id: 3, name: "Lisa Chen" },
    { id: 4, name: "Emma Wilson" },
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) => {
      const isSelected = prev.find((s) => s.id === service.id);
      if (isSelected) {
        setServiceStaffAssignments((prevAssignments) => {
          const newAssignments = { ...prevAssignments };
          delete newAssignments[service.id];
          return newAssignments;
        });
        return prev.filter((s) => s.id !== service.id);
      } else {
        setServiceStaffAssignments((prevAssignments) => ({
          ...prevAssignments,
          [service.id]: staffMembers[0],
        }));
        return [...prev, service];
      }
    });
  };

  const handleStaffAssignment = (serviceId, staffId) => {
    const staff = staffMembers.find((s) => s.id.toString() === staffId);
    setServiceStaffAssignments((prev) => ({
      ...prev,
      [serviceId]: staff,
    }));
  };

  const canProceedToStep = (targetStep) => {
    switch (targetStep) {
      case 2:
        return selectedServices.length > 0;
      case 3:
        return (
          selectedServices.length > 0 &&
          selectedServices.every(
            (service) => serviceStaffAssignments[service.id]
          )
        );
      case 4:
        return (
          selectedServices.length > 0 &&
          selectedServices.every(
            (service) => serviceStaffAssignments[service.id]
          ) &&
          selectedDateTime?.date &&
          selectedDateTime?.time
        );
      default:
        return true;
    }
  };

  const getTotalPrice = () => {
    return selectedServices.reduce(
      (total, service) => total + service.price,
      0
    );
  };

  const getTotalDuration = () => {
    const totalMinutes = selectedServices.reduce((total, service) => {
      const minutes = Number.parseInt(service.duration.split(" ")[0]);
      return total + minutes;
    }, 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours > 0) {
      return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
    }
    return `${minutes}m`;
  };

  const validateCustomerInfo = () => {
    const errors = {};
    if (!customerInfo.fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    if (!customerInfo.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(customerInfo.phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!customerInfo.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      errors.email = "Please enter a valid email address";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCustomerInfoChange = (field, value) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleConfirmBooking = () => {
    if (validateCustomerInfo()) {
      const bookingSummary = {
        customer: customerInfo,
        services: selectedServices,
        staffAssignments: serviceStaffAssignments,
        dateTime: selectedDateTime,
        totalPrice: getTotalPrice(),
        totalDuration: getTotalDuration(),
      };
      console.log("Booking confirmed:", bookingSummary);
      setShowSuccessModal(true);
    }
  };

  const goToNextStep = () => {
    if (step < 4 && canProceedToStep(step + 1)) {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getStepTitle = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return "Service";
      case 2:
        return "Staff";
      case 3:
        return "Day & Time";
      case 4:
        return "Confirm";
      default:
        return "";
    }
  };

  // Week Calendar functions
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getWeekDays = (startDate) => {
    const days = [];
    const start = new Date(startDate);
    // Get the start of the week (Sunday)
    const dayOfWeek = start.getDay();
    start.setDate(start.getDate() - dayOfWeek);
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const navigateWeek = (direction) => {
    setCurrentWeekStart((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + direction * 7);
      return newDate;
    });
  };

  const selectDate = (date) => {
    if (!isPastDate(date)) {
      setSelectedDateTime({ ...selectedDateTime, date, time: null });
    }
  };

  const isDateSelected = (date) => {
    if (!selectedDateTime?.date) return false;
    const selectedDate = selectedDateTime.date;
    return (
      selectedDate.getDate() === date.getDate() &&
      selectedDate.getMonth() === date.getMonth() &&
      selectedDate.getFullYear() === date.getFullYear()
    );
  };

  const formatWeekRange = (weekStart) => {
    const currentMonth = weekStart.getMonth();
    const currentYear = weekStart.getFullYear();
    return `${monthNames[currentMonth]} ${currentYear}`;
  };

  // Helper functions for date/time validation
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    return compareDate < today;
  };

  const isFutureDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    return compareDate > today;
  };

  const isPastTime = (timeString) => {
    if (!selectedDateTime?.date || !isToday(selectedDateTime.date)) {
      return false;
    }
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const [time, period] = timeString.split(" ");
    const [hour, minute] = time.split(":").map(Number);
    let hour24 = hour;
    if (period === "PM" && hour !== 12) {
      hour24 += 12;
    } else if (period === "AM" && hour === 12) {
      hour24 = 0;
    }
    return (
      hour24 < currentHour ||
      (hour24 === currentHour && minute <= currentMinute)
    );
  };

  const getAvailableTimeSlots = () => {
    if (!selectedDateTime?.date || !isToday(selectedDateTime.date)) {
      return timeSlots;
    }
    return timeSlots.filter((time) => !isPastTime(time));
  };

  const handleContinue = () => {
    // Reset the booking wizard or navigate to another page
    setShowSuccessModal(false);
    setStep(1);
    setSelectedServices([]);
    setServiceStaffAssignments({});
    setSelectedDateTime({ date: new Date(), time: null });
    setCustomerInfo({ fullName: "", phone: "", email: "" });
    setFormErrors({});
  };

  // Success Modal Component
  if (showSuccessModal) {
    return (
      <div className="max-w-2xl mx-auto bg-white border border-gray-300 rounded-2xl shadow-md p-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Your booking has been successfully confirmed.
        </p>

        {/* Booking Details */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-lg text-green-800 mb-4">
            Booking Details
          </h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium text-green-700">Date:</span>
              <span>
                {selectedDateTime?.date
                  ? selectedDateTime.date.toLocaleDateString()
                  : "Not selected"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-green-700">Time:</span>
              <span>{selectedDateTime?.time || "Not selected"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-green-700">Services:</span>
              <span>
                {selectedServices.length} service
                {selectedServices.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-green-700">Total:</span>
              <span className="font-semibold">${getTotalPrice()}</span>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-2xl shadow-md">
      {/* Header with Back Button and Breadcrumb */}
      <div className="p-4 sm:p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          {step > 1 && (
            <button
              onClick={goToPreviousStep}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors font-semibold"
            >
              <ChevronLeft className="w-10 h-10" />
              <span className="text-sm sm:text-base">Back</span>
            </button>
          )}
          {step === 1 && <div></div>}
          {/* Next Button in Header */}
          {step < 4 && canProceedToStep(step + 1) && (
            <button
              onClick={goToNextStep}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors font-semibold"
            >
              <span className="text-sm sm:text-base">Next</span>
              <ChevronRightIcon className="w-10 h-10" />
            </button>
          )}
          {(step === 4 || !canProceedToStep(step + 1)) && <div></div>}
        </div>

        {/* Navigation */}
        <div className="overflow-x-auto">
          <div className="flex items-center justify-start gap-x-2 sm:justify-center whitespace-nowrap px-1">
            {[1, 2, 3, 4].map((stepNumber, index) => (
              <div key={stepNumber} className="flex items-center">
                <button
                  onClick={() =>
                    canProceedToStep(stepNumber) && setStep(stepNumber)
                  }
                  disabled={!canProceedToStep(stepNumber)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    stepNumber === step
                      ? "bg-coffee-light text-gray-800 shadow-sm"
                      : stepNumber < step || canProceedToStep(stepNumber)
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                      : "bg-gray-50 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {getStepTitle(stepNumber)}
                </button>
                {index < 3 && (
                  <ChevronRightIcon
                    className={`w-4 h-4 mx-1 ${
                      stepNumber < step ? "text-gray-400" : "text-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-4">
        {/*  Service Selection */}
        {step === 1 && (
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
              <h2 className="text-xl sm:text-2xl font-bold">Select Services</h2>
              {selectedServices.length > 0 && (
                <div className="text-right">
                  <div className="text-sm text-gray-600">
                    {selectedServices.length} service
                    {selectedServices.length > 1 ? "s" : ""} selected
                  </div>
                  <div className="font-semibold text-lg">
                    ${getTotalPrice()}
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-3 sm:space-y-4">
              {Object.entries(serviceCategories).map(([category, services]) => (
                <div
                  key={category}
                  className="border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    onClick={() => toggleCategory(category)}
                  >
                    <span className="font-semibold text-sm sm:text-base">
                      {category}
                    </span>
                    {expandedCategories[category] ? (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    )}
                  </button>
                  {expandedCategories[category] && (
                    <div className="divide-y">
                      {services.map((service) => {
                        const isSelected = selectedServices.find(
                          (s) => s.id === service.id
                        );
                        return (
                          <div
                            key={service.id}
                            className={`flex items-center justify-between p-3 sm:p-3 hover:bg-gray-50 cursor-pointer transition-colors ${
                              isSelected ? "bg-orange-50" : ""
                            }`}
                            onClick={() => handleServiceToggle(service)}
                          >
                            <div className="flex items-center space-x-2 flex-1 min-w-0">
                              <div
                                className={`w-4 h-4 border-2 rounded flex items-center justify-center flex-shrink-0 ${
                                  isSelected
                                    ? "bg-orange-400 border-orange-400"
                                    : "border-gray-300"
                                }`}
                              >
                                {isSelected && (
                                  <Check className="w-2.5 h-2.5 text-white" />
                                )}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-medium text-xs sm:text-sm truncate text-gray-800">
                                  {service.name}{" "}
                                  <span className="text-gray-800 font-normal">
                                    ({service.duration})
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className="font-semibold text-xs sm:text-sm flex-shrink-0 ml-2">
                              ${service.price}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/*  Staff Assignment */}
        {step === 2 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Assign Staff to Services
            </h2>
            <div className="space-y-3">
              {selectedServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-gray-200 rounded-lg px-4 py-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
                    {/* Left: Service name & info */}
                    <div className="flex justify-between items-center text-sm sm:text-base text-gray-900">
                      <span className="font-semibold truncate">
                        {service.name}
                      </span>
                      <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-800 ml-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>${service.price}</span>
                        </div>
                      </div>
                    </div>
                    {/* Right: Dropdown */}
                    <div className="min-w-[200px]">
                      <select
                        className="w-full p-2 sm:p-2.5 border border-gray-300 rounded-md text-sm sm:text-sm "
                        value={
                          serviceStaffAssignments[service.id]?.id || "anyone"
                        }
                        onChange={(e) =>
                          handleStaffAssignment(service.id, e.target.value)
                        }
                      >
                        {staffMembers.map((staff) => (
                          <option key={staff.id} value={staff.id}>
                            {staff.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Date & Time Selection */}
        {step === 3 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Pick a Date & Time
            </h2>
            {/* Week Calendar */}
            <div className="mb-6">
              <div className="bg-white border rounded-lg p-4">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <button
                    onClick={() => navigateWeek(-1)}
                    className="p-2 hover:bg-cream rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {formatWeekRange(currentWeekStart)}
                  </h3>
                  <button
                    onClick={() => navigateWeek(1)}
                    className="p-2 hover:bg-cream rounded-lg transition-colors"
                  >
                    <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
                {/* Week Grid */}
                <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                  {getWeekDays(currentWeekStart).map((date, index) => {
                    const isPast = isPastDate(date);
                    const isCurrentlySelected = isDateSelected(date);
                    const isTodayDate = isToday(date);
                    const isFuture = isFutureDate(date);
                    return (
                      <div key={index} className="text-center">
                        <div className="text-xs sm:text-sm font-medium text-gray-800 mb-1">
                          {dayNames[index]}
                        </div>
                        <button
                          onClick={() => selectDate(date)}
                          disabled={isPast}
                          className={`w-full h-10 sm:h-10 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 border
                        ${
                          isPast
                            ? "bg-cream text-gray-400 border-gray-200 cursor-not-allowed opacity-50"
                            : isCurrentlySelected
                            ? "bg-orange-400 text-white border-orange-400 shadow-md ring-2 ring-orange-400/30"
                            : isTodayDate
                            ? "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200"
                            : "bg-white text-gray-800 border-gray-300 hover:bg-orange-50 hover:border-orange-300"
                        }
                      `}
                        >
                          {date.getDate()}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Time Slots */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-sm sm:text-base">
                Available Times
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {getAvailableTimeSlots().map((time) => {
                  const isPast = isPastTime(time);
                  return (
                    <button
                      key={time}
                      disabled={isPast}
                      className={`p-3 text-xs sm:text-sm border rounded-lg transition-all duration-200 min-h-[44px]
                      ${
                        isPast
                          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-50"
                          : selectedDateTime?.time === time
                          ? "bg-orange-400 text-white border-orange-400 shadow-md ring-2 ring-orange-400/30"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-300 hover:ring-2 hover:ring-orange-300/30"
                      }
                    `}
                      onClick={() =>
                        setSelectedDateTime({ ...selectedDateTime, time })
                      }
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
              {selectedDateTime?.date &&
                isToday(selectedDateTime.date) &&
                getAvailableTimeSlots().length === 0 && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    No more time slots available for today. Please select a
                    future date.
                  </p>
                )}
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Booking Confirmation
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {/* Customer Information Form */}
              <div className="bg-cream-50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-sm sm:text-base">
                  Customer Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full p-3 border rounded-lg text-sm sm:text-base ${
                        formErrors.fullName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                      value={customerInfo.fullName}
                      onChange={(e) =>
                        handleCustomerInfoChange("fullName", e.target.value)
                      }
                    />
                    {formErrors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className={`w-full p-3 border rounded-lg text-sm sm:text-base ${
                        formErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your phone number"
                      value={customerInfo.phone}
                      onChange={(e) =>
                        handleCustomerInfoChange("phone", e.target.value)
                      }
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Services & Staff Summary */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-sm sm:text-base">
                  Services & Staff
                </h3>
                {selectedServices.map((service) => {
                  const assignedStaff = serviceStaffAssignments[service.id];
                  return (
                    <div
                      key={service.id}
                      className="border-b border-gray-200 pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0 mr-2">
                          <div className="font-medium text-sm sm:text-base truncate">
                            {service.name}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">
                            {service.duration} • Staff:{" "}
                            {assignedStaff?.name || "Not assigned"}
                          </div>
                          {assignedStaff && !assignedStaff.isDefault && (
                            <div className="text-xs text-gray-500 truncate">
                              {assignedStaff.specialty}
                            </div>
                          )}
                        </div>
                        <span className="font-semibold text-sm sm:text-base flex-shrink-0">
                          ${service.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Date & Time Summary */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">
                  Date & Time
                </h3>
                <p className="text-sm sm:text-base">
                  Date:{" "}
                  {selectedDateTime?.date
                    ? selectedDateTime.date.toLocaleDateString()
                    : "Not selected"}
                </p>
                <p className="text-sm sm:text-base">
                  Time: {selectedDateTime?.time || "Not selected"}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Total Duration: {getTotalDuration()}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleConfirmBooking}
                  className="bg-cream hover:bg-coffee-light disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
                >
                  {`Confirm Booking - $${getTotalPrice()}`}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBookingWizard;
