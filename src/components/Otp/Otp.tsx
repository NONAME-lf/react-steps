import { EXAMPLE_OTP } from "../../constants";
import "./style.scss";
import { useState, useRef } from "react";

export function Otp() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow alphanumeric characters and limit to EXAMPLE_OTP length
    const clearValue = e.target.value
      .replace(/[^a-zA-Z0-9]/g, "")
      .toUpperCase()
      .slice(0, EXAMPLE_OTP.length);

    setValue(clearValue);
  };

  return (
    <div className="otp-component">
      <form>
        <input
          className="otp-input"
          name="otp-input"
          id="otp-input"
          type="text"
          value={value}
          onChange={handleChange}
          maxLength={EXAMPLE_OTP.length}
          autoComplete="off"
          autoFocus
        />
        <ul className="otp-blocks">
          {EXAMPLE_OTP.split("").map((_, index) => (
            <li
              key={index}
              className={`otp-block ${index === value.length ? "active" : ""} ${
                value[index] ? "filled" : ""
              }`}
            >
              <span className="otp-char">{value[index] || ""}</span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
