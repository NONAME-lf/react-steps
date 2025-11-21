import { EXAMPLE_OTP } from "../../constants";
import "./style.scss";
import { useState, useRef } from "react";

export function Otp() {
  const [value, setValue] = useState<string>("");
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clearValue = e.target.value
      .replace(/[^0-9]/g, "")
      .slice(0, EXAMPLE_OTP.length);

    setValue(clearValue);
  };

  const updateCursorPosition = () => {
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart || 0);
    }
  };

  const handleBlockClick = (index: number) => {
    inputRef.current?.focus();
    setTimeout(() => {
      inputRef.current?.setSelectionRange(index + 1, index + 1);
      setCursorPosition(index);
    }, 0);
  };

  return (
    <div className="otp-component">
      <form>
        <label htmlFor="otp-input">
          <input
            ref={inputRef}
            className="otp-input"
            name="otp-input"
            id="otp-input"
            type="text"
            value={value}
            onChange={handleChange}
            onKeyUp={updateCursorPosition}
            maxLength={EXAMPLE_OTP.length}
            autoComplete="off"
            autoFocus
          />
        </label>
        <ul className="otp-blocks">
          {EXAMPLE_OTP.split("").map((_, index) => (
            <li
              key={index}
              onClick={() => handleBlockClick(index)}
              className={`otp-block ${
                index === cursorPosition && !value[index] ? "active" : ""
              } ${value[index] ? "filled" : ""} ${
                index === cursorPosition ? "cursor-here" : ""
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
