import {ChangeEvent} from 'react';
import {ClientType} from "@/types";
import {RoleEnum, StateEnum} from "@/enums";

type FilterControlsProps = {
  onSearch: (text: string) => void;
  onStateChange: (state: ClientType['state']) => void;
  onRoleChange: (role: ClientType['role']) => void;
};

const TableControls = ({onSearch, onStateChange, onRoleChange}: FilterControlsProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value.toLowerCase());
  };

  const handleStateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    onStateChange(event.target.value);
  };

  const handleRoleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    onRoleChange(event.target.value);
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Hledat podle jména..."
        onChange={handleSearch}
        className="p-2 px-[20px] border border-gray-300 w-[300px] bg-gray-200 rounded-2xl outline-gray-400"
      />
      <select
        onChange={handleStateFilter}
        className="ml-5 p-[10px] px-[20px] border border-gray-300 rounded-2xl outline-gray-400 bg-gray-200"
      >
        <option value="">Všechny stavy</option>
        {Object.keys(StateEnum).map((key) => (
          <option key={key} value={key}>
            {StateEnum[key as keyof typeof StateEnum]}
          </option>
        ))}
      </select>

      <select
        onChange={handleRoleFilter}
        className="ml-5 p-[10px] px-[20px] border border-gray-300 rounded-2xl outline-gray-400 bg-gray-200"
      >
        <option className="gray-400" value="">Všechny vztahy</option>
        {Object.keys(RoleEnum).map((key) => (
          <option key={key} value={key}>
            {RoleEnum[key as keyof typeof RoleEnum]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TableControls;
