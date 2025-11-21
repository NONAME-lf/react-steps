import { EXAMPLE_OTP } from "../../constants";
import "./style.scss";
import { useState, useRef } from "react";

export function Otp() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clearedValue = e.target.value
      .toUpperCase()
      .slice(0, EXAMPLE_OTP.length);

    setValue(clearedValue);
  };

  const handleBlockClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="otp-component">
      <form>
        <input
          ref={inputRef}
          className="otp-input"
          name="otp-input"
          id="otp-input"
          type="number"
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
              onClick={() => handleBlockClick()}
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
