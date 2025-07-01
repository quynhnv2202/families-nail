"use client";

import { useState } from "react";
import { Check, User, Phone } from "lucide-react";
import { useRouter } from "next/router";

const GroupContactStep = ({ groupData, updateGroupData }) => {
  const [contacts, setContacts] = useState(
    groupData.clients.map((client) => ({
      fullName: client.fullName || "",
      phone: client.phone || "",
    }))
  );
  const [formErrors, setFormErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  const handleInputChange = (index, field, value) => {
    const updated = [...contacts];
    updated[index][field] = value;
    setContacts(updated);
    updateGroupData({
      clients: groupData.clients.map((client, idx) =>
        idx === index ? { ...client, [field]: value } : client
      ),
    });
  };

  const validateForm = () => {
    const errors = contacts.map((contact) => {
      const err = {};
      if (!contact.fullName.trim()) err.fullName = "Required";
      if (!contact.phone.trim()) {
        err.phone = "Required";
      } else if (!/^\d{10,}$/.test(contact.phone.replace(/\D/g, ""))) {
        err.phone = "Invalid";
      }
      return err;
    });
    setFormErrors(errors);
    return errors.every((e) => Object.keys(e).length === 0);
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Group booking submitted:", {
      ...groupData,
    });

    setIsSubmitting(false);
    setShowSuccessModal(true);
  };

  const getTotalPrice = () => {
    return groupData.clients.reduce((total, client) => {
      return (
        total + (client.services?.reduce((sum, s) => sum + s.price, 0) || 0)
      );
    }, 0);
  };

  const getTotalDuration = () => {
    let totalMinutes = 0;
    groupData.clients.forEach((client) => {
      client.services?.forEach((service) => {
        const minutes = Number.parseInt(service.duration.split(" ")[0]);
        totalMinutes += minutes;
      });
    });
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  if (showSuccessModal) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Group Booking Confirmed!
        </h2>
        <p className="text-gray-600 mb-6">
          Your group booking has been successfully confirmed.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
          <h4 className="font-semibold text-green-800 mb-2">Booking Details</h4>
          <div className="text-sm text-green-700 space-y-1">
            <p>
              <strong>Date:</strong>{" "}
              {groupData.selectedDateTime?.date?.toLocaleDateString()}
            </p>
            <p>
              <strong>Time:</strong> {groupData.selectedDateTime?.time}
            </p>
            <p>
              <strong>Group Size:</strong> {groupData.groupSize} people
            </p>
            <p>
              <strong>Total:</strong> ${getTotalPrice()}
            </p>
          </div>
        </div>
        <button
          onClick={() => router.push("/")}
          className="bg-cream-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cream-800 transition"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Contact Information & Confirmation
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-4 text-sm sm:text-base">
            Contact Details for Each Person
          </h3>
          <div className="space-y-4">
            {contacts.map((person, index) => (
              <div
                key={index}
                className="border border-gray-200 p-4 rounded-lg"
              >
                <h4 className="font-medium mb-2">Person {index + 1}</h4>
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1">
                    <User className="w-4 h-4 inline mr-2" /> Full Name *
                  </label>
                  <input
                    type="text"
                    value={person.fullName}
                    onChange={(e) =>
                      handleInputChange(index, "fullName", e.target.value)
                    }
                    className={`w-full p-2 border rounded-md text-sm ${
                      formErrors[index]?.fullName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formErrors[index]?.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors[index].fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    <Phone className="w-4 h-4 inline mr-2" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={person.phone}
                    onChange={(e) =>
                      handleInputChange(index, "phone", e.target.value)
                    }
                    className={`w-full p-2 border rounded-md text-sm ${
                      formErrors[index]?.phone
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formErrors[index]?.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors[index].phone}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div>
          <h3 className="font-semibold mb-4 text-sm sm:text-base">
            Booking Summary
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <div className="border-b border-gray-200 pb-3">
              <p>
                <strong>Date:</strong>{" "}
                {groupData.selectedDateTime?.date?.toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {groupData.selectedDateTime?.time}
              </p>
              <p>
                <strong>Group Size:</strong> {groupData.groupSize} people
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-800">Services & Staff:</h4>
              {groupData.clients.map((client, index) => (
                <div key={index} className="bg-white rounded p-3 text-sm">
                  <p className="font-medium text-cream-700">
                    Person {index + 1}
                  </p>
                  <div className="text-gray-800">
                    {client.services?.length > 0 ? (
                      client.services.map((s, i) => (
                        <div key={i}>
                          <span>
                            {s.name}{" "}
                            <span className="text-xs text-gray-800">
                              {s.staff ? `- ${s.staff.name}` : ""}
                            </span>
                          </span>
                        </div>
                      ))
                    ) : (
                      <span>Anyone</span>
                    )}
                  </div>
                  <p className="text-cream-800 font-medium">
                    $
                    {client.services?.reduce((sum, s) => sum + s.price, 0) || 0}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-3">
              <p className="text-lg font-bold text-cream-800">
                Total: ${getTotalPrice()}
              </p>
              <p className="text-sm text-gray-600">
                Duration: {getTotalDuration()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-cream-600 hover:bg-cream-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Confirming...
            </>
          ) : (
            `Confirm Group Booking - $${getTotalPrice()}`
          )}
        </button>
      </div>
    </div>
  );
};

export default GroupContactStep;
