import {TableColumn} from "react-data-table-component";
import {getStateClass} from "@/utils/getStateColor.ts";
import {ClientType} from "@/types";
import {RoleEnum, StateEnum} from "@/enums";

const CLIENT_TABLE_DATA: TableColumn<ClientType>[] = [
  {
    name: 'NÁZEV/JMÉNO',
    selector: (row: ClientType) => row.name || '',
    cell: (row: ClientType) => <span className="font-bold">{row.name || ''}</span>,
    sortable: true,
  },
  {
    name: 'STAV',
    selector: (row: ClientType) => row.state || '',
    cell: (row: ClientType) => {
      const stateLabel = StateEnum[row.state] || '';
      const stateClass = getStateClass(stateLabel as StateEnum);
      return <span className={`${stateClass}`}>{stateLabel}</span>;
    },
    sortable: true,
  },
  {
    name: 'VZTAH',
    selector: (row: ClientType) => row.role || '-',
    cell: (row: ClientType) => RoleEnum[row.role] || '-',
    sortable: true,
  },
  {
    name: 'RATING',
    selector: (row: ClientType) => row.rating || '-',
    sortable: true,
    width: '120px',
  },
  {
    name: 'VLASTNÍK',
    selector: (row: ClientType) => row.owner?.fullName || '-',
    sortable: true,
  },
  {
    name: 'IČ',
    selector: (row: ClientType) => row.regNumber || '-',
    sortable: true,
  },
  {
    name: 'MĚSTO',
    selector: (row: ClientType) => row.primaryAddress?.address?.city || '-',
    sortable: true,
  },
];

export default CLIENT_TABLE_DATA
