import {ChangeEvent, useEffect, useState} from 'react';
import {getAllClientsData} from './utils/getAllClientsData.ts';
import DataTable, {TableColumn} from 'react-data-table-component';
import {StateEnum} from "@/enums/state.enum.ts";
import {RoleEnum} from "@/enums/role.enum.ts";
import {getStateClass} from "@/utils/getStateColor.ts";
import NoData from "@/components/NoData.tsx";
import ClientInfo from "@/components/ClientInfo.tsx";
import {ClientsRow} from "@/types/clients/clients-row.type.ts";
import {ClientsData} from "@/types/clients/clients-data.type.ts";

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
    selector: (row: ClientsRow) => row.owner?.fullName || '',
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

function App() {
  const [clientData, setClientData] = useState<ClientsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [filteredData, setFilteredData] = useState<ClientsRow[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientsRow | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getAllClientsData();
        setClientData(data);
        setFilteredData(data.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchText(searchValue);
    applyFilters(searchValue, selectedState, selectedRole);
  };

  const handleStateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const stateValue = event.target.value;
    setSelectedState(stateValue);
    applyFilters(searchText, stateValue, selectedRole);
  };

  const handleRoleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const roleValue = event.target.value;
    setSelectedRole(roleValue);
    applyFilters(searchText, selectedState, roleValue);
  };

  const handleRowClick = (row: ClientsRow) => {
    setSelectedClient(row);
  };

  const applyFilters = (search: string, state: string, role: string) => {
    if (clientData && clientData.data) {
      const filtered = clientData.data.filter((item) => {
        const matchesSearch = item.name?.toLowerCase().includes(search);
        const matchesState = state ? item.state === state : true;
        const matchesRole = role ? item.role === role : true;
        return matchesSearch && matchesState && matchesRole;
      });
      setFilteredData(filtered);
    }
  };

  return (
    <div className="p-10">
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data: {error.message}</p>}
      {clientData && (
        <div>
          <h1 className="text-4xl mb-5">RAYNET Tech Task</h1>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Hledat podle jména..."
              value={searchText}
              onChange={handleSearch}
              className="p-2 px-[20px] border border-gray-300 w-[300px] bg-gray-200 rounded-2xl outline-gray-400"
            />

            <select
              value={selectedState}
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
              value={selectedRole}
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

          <DataTable
            columns={columns}
            data={filteredData}
            customStyles={{
              headCells: {
                style: {
                  backgroundColor: '#49bcc4',
                  color: '#fff',
                  textAlign: 'left',
                },
              },
              rows: {
                highlightOnHoverStyle: {
                  backgroundColor: '#d7f7d2',
                  cursor: "pointer"
                },
              },
            }}
            striped
            highlightOnHover
            pagination
            noDataComponent={<NoData/>}
            onRowClicked={handleRowClick}
          />
          {selectedClient && <ClientInfo client={selectedClient}/>}
        </div>
      )}
    </div>
  );
}

export default App;
