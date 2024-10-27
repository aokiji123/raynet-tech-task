import {TableColumn} from "react-data-table-component";
import {ClientsRow} from "@/types/clients/clients-row.type.ts";
import {StateEnum} from "@/enums/state.enum.ts";
import {getStateClass} from "@/utils/getStateColor.ts";
import {RoleEnum} from "@/enums/role.enum.ts";

export function getDataTableColumns() {
  const columns: TableColumn<ClientsRow>[] = [
    {
      name: 'NÁZEV/JMÉNO',
      selector: (row: ClientsRow) => row.name || '',
      cell: (row: ClientsRow) => <span className="font-bold">{row.name || ''}</span>,
      sortable: true,
    },
    {
      name: 'STAV',
      selector: (row: ClientsRow) => row.state || '',
      cell: (row: ClientsRow) => {
        const stateLabel = StateEnum[row.state as keyof typeof StateEnum] || '';
        const stateClass = getStateClass(stateLabel);
        return <span className={`${stateClass}`}>{stateLabel}</span>;
      },
      sortable: true,
    },
    {
      name: 'VZTAH',
      selector: (row: ClientsRow) => row.role || '-',
      cell: (row: ClientsRow) => RoleEnum[row.role as keyof typeof RoleEnum] || '-',
      sortable: true,
    },
    {
      name: 'RATING',
      selector: (row: ClientsRow) => row.rating || '-',
      sortable: true,
      width: '120px',
    },
    {
      name: 'VLASTNÍK',
      selector: (row: ClientsRow) => row.owner?.fullName || '-',
      sortable: true,
    },
    {
      name: 'IČ',
      selector: (row: ClientsRow) => row.regNumber || '-',
      sortable: true,
    },
    {
      name: 'MĚSTO',
      selector: (row: ClientsRow) => row.primaryAddress?.address?.city || '-',
      sortable: true,
    },
  ];

  return columns
}
