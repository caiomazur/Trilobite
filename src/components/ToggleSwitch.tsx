import React from "react";
import classNames from "classnames";

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-block w-10 h-6">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className="opacity-0 w-0 h-0"
        />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-700 rounded-full transition duration-300">
          <span
            className={classNames(
              "absolute h-5 w-5 bg-white dark:bg-gray-300 rounded-full transition-transform duration-300 transform",
              {
                "translate-x-5": isOn,
                "translate-x-0": !isOn,
              }
            )}
            style={{ top: "2px" }}
          />
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
