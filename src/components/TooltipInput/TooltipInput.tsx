import { useState } from "react";
import { TOOLTIP_TEXT_ENTRIES } from "../../constants";
import "./style.scss";

interface TooltipInputProps {
  someEntryProp?: string;
}

export default function TooltipInput(props: TooltipInputProps) {
  const [matchedEntries, setMatchedEntries] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const renderHighlighted = (entry: string, query: string) => {
    if (!query) return entry;
    const lowerEntry = entry.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const qLen = query.length;
    let cursor = 0;
    const nodes: React.ReactNode[] = [];

    while (cursor < entry.length) {
      const foundIndex = lowerEntry.indexOf(lowerQuery, cursor);
      if (foundIndex === -1) {
        nodes.push(<span key={cursor}>{entry.slice(cursor)}</span>);
        break;
      }

      if (foundIndex > cursor) {
        nodes.push(<span key={cursor}>{entry.slice(cursor, foundIndex)}</span>);
      }

      nodes.push(
        <span key={`h-${foundIndex}`} className="match-highlight">
          {entry.slice(foundIndex, foundIndex + qLen)}
        </span>
      );
      cursor = foundIndex + qLen;
    }
    return nodes;
  };

  const handleSelect = (entry: string) => {
    setValue(entry);
    setMatchedEntries([]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    setValue(inputValue);

    inputValue = inputValue.trim();

    if (inputValue === "") {
      setMatchedEntries([]);
      return;
    }

    const filtered = TOOLTIP_TEXT_ENTRIES.filter((entry) =>
      entry.toLowerCase().includes(inputValue.toLowerCase())
    );

    setMatchedEntries(filtered);
  };

  return (
    <div className="tooltip-input-component">
      <form action="#">
        <label htmlFor="tooltip-input">
          Choose a client to start a session
        </label>
        <input
          type="text"
          id="tooltip-input"
          name="tooltip-input"
          className="tooltip-input"
          value={value}
          onChange={handleChange}
        />
        <ul
          className={`tooltip-list ${matchedEntries.length > 0 ? "shown" : ""}`}
        >
          {matchedEntries.map((entry, index) => (
            <li
              key={index}
              className="tooltip-item"
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(entry);
              }}
            >
              {renderHighlighted(entry, value.trim())}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
