"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Check, Users, User } from "lucide-react";

const GroupServicesStep = ({ groupData, updateGroupData, nextStep }) => {
  const [sameServices, setSameServices] = useState(
    groupData.sameServices ?? null
  );
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceStaffAssignments, setServiceStaffAssignments] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    if (!groupData.clients || groupData.clients.length < groupData.groupSize) {
      const newClients = Array.from(
        { length: groupData.groupSize },
        (_, i) => ({
          id: i + 1,
          name: `Person ${i + 1}`,
          services: [],
        })
      );
      updateGroupData({ ...groupData, clients: newClients });
    }
  }, [groupData.groupSize]);

  useEffect(() => {
    if (!sameServices) {
      const client = groupData.clients?.[currentClientIndex];
      setSelectedServices(client?.services || []);
      const assignmentMap = {};
      (client?.services || []).forEach((s) => {
        assignmentMap[s.id] = s.staff;
      });
      setServiceStaffAssignments(assignmentMap);
    }
  }, [currentClientIndex]);

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
    { id: "anyone", name: "Anyone Available" },
    { id: 1, name: "Sarah Johnson" },
    { id: 2, name: "Maria Garcia" },
    { id: 3, name: "Lisa Chen" },
    { id: 4, name: "Emma Wilson" },
  ];

  const handleSameServicesChoice = (choice) => {
    setSameServices(choice);
    setCurrentClientIndex(0);
    setSelectedServices([]);
    setServiceStaffAssignments({});
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
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
          [service.id]:
            staffMembers.find((s) => s.id === "anyone") || staffMembers[0],
        }));
        return [...prev, service];
      }
    });
  };

  const handleStaffAssignment = (serviceId, staffId) => {
    const staff = staffMembers.find(
      (s) => s.id.toString() === staffId.toString()
    );
    setServiceStaffAssignments((prev) => ({ ...prev, [serviceId]: staff }));
  };

  const handleNextClient = () => {
    const servicesWithStaff = selectedServices.map((service) => ({
      ...service,
      staff: serviceStaffAssignments[service.id],
    }));

    const updatedClients = [...groupData.clients];
    updatedClients[currentClientIndex] = {
      ...updatedClients[currentClientIndex],
      services: servicesWithStaff,
    };

    if (sameServices) {
      const allClients = updatedClients.map((client) => ({
        ...client,
        services: servicesWithStaff,
      }));
      updateGroupData({ ...groupData, clients: allClients, sameServices });
      nextStep();
    } else {
      updateGroupData({ ...groupData, clients: updatedClients, sameServices });
      if (currentClientIndex < groupData.groupSize - 1) {
        setCurrentClientIndex((prev) => prev + 1);
      } else {
        nextStep();
      }
    }
  };

  if (sameServices === null) {
    return (
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Service Configuration
        </h2>
        <p className="text-gray-600 mb-6">
          Will all clients have the same services?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
          <button
            onClick={() => handleSameServicesChoice(true)}
            className="group p-6 border-2 rounded-xl text-left transition-all duration-200 border-gray-200 hover:border-cream hover:bg-cream"
          >
            <Users className="w-5 h-5 mb-3 text-cream-700 group-hover:text-cream-800" />
            <h4 className="font-semibold text-lg mb-2 group-hover:text-cream-800">
              Yes, Same Services
            </h4>
            <p className="text-gray-600 text-sm group-hover:text-cream-700">
              All group members will receive the same services from the same
              staff member
            </p>
          </button>
          <button
            onClick={() => handleSameServicesChoice(false)}
            className="group p-6 border-2 rounded-xl text-left transition-all duration-200 border-gray-200 hover:border-cream hover:bg-cream"
          >
            <User className="w-8 h-8 mb-3 text-cream-700 group-hover:text-cream-800" />
            <h4 className="font-semibold text-lg mb-2 group-hover:text-cream-800">
              No, Individual Services
            </h4>
            <p className="text-gray-600 text-sm group-hover:text-cream-700">
              Each person will choose their own services and preferred staff
              member
            </p>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          {sameServices
            ? "Select Services for All Clients"
            : `Select Services for ${groupData.clients?.[currentClientIndex]?.name}`}
        </h2>

        {!sameServices && (
          <div className="flex items-center space-x-2 mb-4">
            {groupData.clients?.map((client, index) => (
              <div
                key={client.id}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  index === currentClientIndex
                    ? "bg-cream-600 text-white"
                    : index < currentClientIndex
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                Person {index + 1}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-3">
        {Object.entries(serviceCategories).map(([category, services]) => (
          <div key={category} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              onClick={() => toggleCategory(category)}
            >
              <span className="font-semibold text-sm">{category}</span>
              {expandedCategories[category] ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </button>

            {expandedCategories[category] && (
              <div className="divide-y">
                {services.map((service) => {
                  const isSelected = selectedServices.find(
                    (s) => s.id === service.id
                  );
                  return (
                    <div key={service.id} className="p-3">
                      <div
                        className={`flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer transition-colors rounded-lg ${
                          isSelected ? "bg-purple-50" : ""
                        }`}
                        onClick={() => handleServiceToggle(service)}
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <div
                            className={`w-4 h-4 border-2 rounded flex items-center justify-center flex-shrink-0 ${
                              isSelected
                                ? "bg-cream-600 border-cream-600"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <Check className="w-2.5 h-2.5 text-white" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-sm text-gray-800">
                              {service.name}
                            </div>
                            <div className="text-xs text-gray-600">
                              {service.duration}
                            </div>
                          </div>
                        </div>
                        <span className="font-semibold text-sm flex-shrink-0 ml-2">
                          ${service.price}
                        </span>
                      </div>

                      {isSelected && (
                        <div className="mt-3 pl-7">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600 font-medium min-w-0">
                              Staff:
                            </span>
                            <select
                              className="flex-1 p-2 border border-gray-300 rounded-md text-sm bg-white"
                              value={
                                serviceStaffAssignments[
                                  service.id
                                ]?.id?.toString() || "anyone"
                              }
                              onChange={(e) =>
                                handleStaffAssignment(
                                  service.id,
                                  e.target.value
                                )
                              }
                            >
                              {staffMembers.map((staff) => (
                                <option
                                  key={staff.id}
                                  value={staff.id.toString()}
                                >
                                  {staff.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleNextClient}
          disabled={
            selectedServices.length === 0 ||
            selectedServices.some(
              (service) => !serviceStaffAssignments[service.id]
            )
          }
          className="bg-cream-600 hover:bg-cream-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          {sameServices
            ? "Continue to Date & Time"
            : currentClientIndex < groupData.groupSize - 1
            ? `Continue to Person ${currentClientIndex + 2}`
            : "Continue to Date & Time"}
        </button>
      </div>
    </div>
  );
};

export default GroupServicesStep;
