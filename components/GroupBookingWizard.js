"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRightIcon } from "lucide-react";
import GroupSizeStep from "./GroupSizeStep";
import GroupServicesStep from "./GroupServicesStep";
import GroupDateTimeStep from "./GroupDateTimeStep";
import GroupContactStep from "./GroupContactStep";

const GroupBookingWizard = () => {
  const [step, setStep] = useState(1);
  const [groupData, setGroupData] = useState({
    groupSize: 2,
    sameServices: null,
    clients: [],
    selectedDateTime: { date: null, time: null },
    contactInfo: { fullName: "", phone: "", email: "" },
  });

  const updateGroupData = (newData) => {
    setGroupData((prev) => ({ ...prev, ...newData }));
  };

  const canProceedToStep = (targetStep) => {
    switch (targetStep) {
      case 2:
        return groupData.groupSize >= 2;
      case 3:
        return (
          groupData.clients.length > 0 &&
          groupData.clients.every(
            (client) =>
              client.services?.length > 0 &&
              client.services.every((s) => s.staff && s.staff.id)
          )
        );
      case 4:
        return (
          groupData.selectedDateTime?.date && groupData.selectedDateTime?.time
        );
      default:
        return true;
    }
  };

  const getStepTitle = (stepNumber) => {
    const titles = [
      "Group Size",
      "Services & Staff",
      "Day & Time",
      "Contact & Confirm",
    ];
    return titles[stepNumber - 1];
  };

  const goToNextStep = () => {
    if (step < 4 && canProceedToStep(step + 1)) {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepComponents = {
    1: GroupSizeStep,
    2: GroupServicesStep,
    3: GroupDateTimeStep,
    4: GroupContactStep,
  };

  const CurrentStepComponent = stepComponents[step];

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-2xl shadow-md">
      {/* Header */}
      <div className="p-4 border-b">
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

        {/* Progress Navigation */}
        <div className="overflow-x-auto no-scrollbar">
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
                      ? "bg-cream text-white shadow-sm"
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

      {/* Content */}
      <div className="p-4">
        <CurrentStepComponent
          groupData={groupData}
          updateGroupData={updateGroupData}
          nextStep={goToNextStep}
          prevStep={goToPreviousStep}
          canProceed={canProceedToStep(step + 1)}
        />
      </div>
    </div>
  );
};

export default GroupBookingWizard;
