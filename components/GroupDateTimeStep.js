"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRightIcon, Clock } from "lucide-react";

const GroupDateTimeStep = ({ groupData, updateGroupData, nextStep }) => {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    groupData.selectedDateTime?.date
  );
  const [selectedTime, setSelectedTime] = useState(
    groupData.selectedDateTime?.time
  );

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

  const getWeekDays = (startDate) => {
    const days = [];
    const start = new Date(startDate);
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
      setSelectedDate(date);
      setSelectedTime(null);
      updateGroupData({
        selectedDateTime: { date, time: null },
      });
    }
  };

  const selectTime = (time) => {
    setSelectedTime(time);
    updateGroupData({
      selectedDateTime: { date: selectedDate, time },
    });
  };

  const isDateSelected = (date) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === date.getDate() &&
      selectedDate.getMonth() === date.getMonth() &&
      selectedDate.getFullYear() === date.getFullYear()
    );
  };

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    return compareDate < today;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const formatWeekRange = (weekStart) => {
    const currentMonth = weekStart.getMonth();
    const currentYear = weekStart.getFullYear();
    return `${monthNames[currentMonth]} ${currentYear}`;
  };

  const getTotalPrice = () => {
    let total = 0;
    groupData.clients.forEach((client) => {
      client.services?.forEach((service) => {
        total += service.price;
      });
    });
    return total;
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Pick a Date & Time</h2>

      {/* Week Calendar */}
      <div className="mb-6">
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateWeek(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <h3 className="text-base sm:text-lg font-semibold">
              {formatWeekRange(currentWeekStart)}
            </h3>
            <button
              onClick={() => navigateWeek(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
            {getWeekDays(currentWeekStart).map((date, index) => {
              const isPast = isPastDate(date);
              const isCurrentlySelected = isDateSelected(date);
              const isTodayDate = isToday(date);

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
                          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-50"
                          : isCurrentlySelected
                          ? "bg-coffee-light text-white border-coffee-light shadow-md ring-2 ring-coffee-light/30"
                          : isTodayDate
                          ? "bg-beige text-coffee border-beige hover:bg-beige/80"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-coffee-light/10 hover:border-coffee-light"
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
        {!selectedDate ? (
          <div className="text-center py-8 text-gray-500">
            <Clock className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>Please select a date first</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {timeSlots.map((time) => {
              const isTodayDate = isToday(selectedDate);
              const now = new Date();
              const [hour, minutePart] = time.split(":");
              const minutes = parseInt(minutePart.slice(0, 2), 10);
              const ampm = minutePart.slice(-2);
              const hour24 =
                parseInt(hour, 10) + (ampm === "PM" && hour !== "12" ? 12 : 0);
              const timeDate = new Date(selectedDate);
              timeDate.setHours(hour24, minutes, 0, 0);

              const isPastTime = timeDate < now;

              return (
                <button
                  key={time}
                  onClick={() => selectTime(time)}
                  disabled={isPastTime}
                  className={`p-3 text-xs sm:text-sm border rounded-lg transition-all duration-200 min-h-[44px]
                    ${
                      isPastTime
                        ? "hidden"
                        : selectedTime === time
                        ? "bg-coffee-light text-white border-coffee-light shadow-md ring-2 ring-coffee-light/30"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-coffee-light/10 hover:border-coffee-light hover:ring-2 hover:ring-coffee-light/30"
                    }
                  `}
                >
                  {time}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!selectedDate || !selectedTime}
          className="bg-cream-600 hover:bg-cream-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          Continue to Contact Info
        </button>
      </div>
    </div>
  );
};

export default GroupDateTimeStep;
