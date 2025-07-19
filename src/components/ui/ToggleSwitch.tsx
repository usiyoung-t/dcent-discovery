interface ToggleSwitchProps {
  isChecked: boolean;
  onChange: () => void;
  labelOn: string;
  labelOff: string;
}

function ToggleSwitch({
  isChecked,
  onChange,
  labelOn,
  labelOff,
}: ToggleSwitchProps) {
  const label = isChecked ? labelOn : labelOff;

  return (
    <div className="flex flex-col items-center space-x-4">
      <span className="w-20 font-semibold text-center text-black">{label}</span>
      <div
        className={`relative inline-block w-14 h-8 cursor-pointer rounded-full transition-colors duration-300 ease-in-out ${
          isChecked ? "bg-green-500" : "bg-gray-400"
        }`}
        onClick={onChange}
        role="switch"
        aria-checked={isChecked}
      >
        <span
          className={`absolute left-1 top-1 inline-block w-6 h-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
            isChecked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}

export default ToggleSwitch;
