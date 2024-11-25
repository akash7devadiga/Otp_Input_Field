import { useState, useRef, useEffect } from "react";

const OtpInputField = () => {
  const [otpInput, setOtpInput] = useState(new Array(8).fill(''));
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;


    const updatedOtpField = [...otpInput];


    if (key === "ArrowRight") {
      if (index + 1 < otpInput.length)
        ref.current[index + 1].focus();
      return;
    }

    if (key === "ArrowLeft") {
      if (index > 0)
        ref.current[index - 1].focus();
      return;
    }

    if (key === "Backspace") {
      console.log("Delete clicked!!!");
      updatedOtpField[index] = "";
      setOtpInput(updatedOtpField);
      if (index > 0)
        ref.current[index - 1].focus();
      return;
    }

    if (isNaN(key))
      return;

    if (index + 1 < otpInput.length)
      ref.current[index + 1].focus();


    updatedOtpField[index] = key;
    setOtpInput(updatedOtpField);
  }

  useEffect(() => {
    ref.current[0].focus();
  }, [])
  return (

    <div className="container">
      <h1>OTP input field with useRef</h1>
      {
        otpInput.map((value, index) => (
          <input key={index} type="text" value={value}
            ref={(currentInput) => ref.current[index] = currentInput}
            onKeyDown={(e) => handleKeyDown(e, index)} />
        ))
      }
    </div>
  )
}

export default OtpInputField;