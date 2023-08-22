import React, { useState, useEffect } from "react";

type OtpInputProps = {
  submit: boolean;
  onOtpSubmit: (otp: string) => void;
};

function OtpInput({ submit, onOtpSubmit }: OtpInputProps) {
  const [pins, setPins] = useState(["", "", "", ""]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (!isNaN(Number(value))) {
      const newPins = [...pins];
      newPins[index] = value;
      setPins(newPins);

      if (value !== "" && index < 3) {
        document.getElementById(`pin-${index + 1}`)?.focus();
      } else if (value === "" && index > 0) {
        document.getElementById(`pin-${index - 1}`)?.focus();
      }
    }
  };

  useEffect(() => {
    if (submit && pins.every((pin) => pin !== "") && !submitted) {
      setSubmitted(true);
      onOtpSubmit(pins.join(""));
      // Here you can perform actions like verifying the OTP on submission
    }
  }, [submit, pins, submitted, onOtpSubmit]);

  return (
    <div className="pt-10 flex justify-center space-x-4">
      {pins.map((pin, index) => (
        <div
          key={index}
          className="px-3 py-2 border-2 border-AuroMetalSaurus-100 rounded-full text-AuroMetalSaurus-400"
        >
          <input
            type="text"
            id={`pin-${index}`}
            className="outline-none bg-transparent text-sm w-12 text-center"
            maxLength={1}
            value={pin}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default OtpInput;
