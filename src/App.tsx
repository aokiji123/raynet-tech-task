import {useCallback, useEffect, useMemo, useState} from 'react';
import DataTable, {TableStyles} from 'react-data-table-component';
import NoData from '@/components/NoData.tsx';
import ClientInfo from '@/components/ClientInfo.tsx';
import {ClientsRow} from '@/types/clients/clients-row.type.ts';
import {getDataTableColumns} from '@/utils/getDataTableColumns.tsx';
import useClientsData from '@/hooks/useClientsData.ts';
import FilterControls from '@/components/FilterControls.tsx';

const customTableStyles: TableStyles = {
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
}

function App() {
  const {clientsData, loading, error} = useClientsData();

  const [filteredData, setFilteredData] = useState<ClientsRow[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedClient, setSelectedClient] = useState<ClientsRow | null>(null);

  const columns = useMemo(() => getDataTableColumns(), [])

  const applyFilters = useCallback((search: string, state: string, role: string) => {
    if (clientsData?.data) {
      const filtered = clientsData.data.filter((item) => {
        const matchesSearch = item.name?.toLowerCase().includes(search);
        const matchesState = state ? item.state === state : true;
        const matchesRole = role ? item.role === role : true;
        return matchesSearch && matchesState && matchesRole;
      });
      setFilteredData(filtered);
    }
  }, [clientsData]);

  useEffect(() => {
    if (clientsData?.data) {
      applyFilters(searchText, selectedState, selectedRole);
    }
  }, [clientsData, searchText, selectedState, selectedRole, applyFilters]);


  return (
    <div className="p-10">
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data: {error.message}</p>}
      {clientsData && (
        <div>
          <h1 className="text-4xl mb-5">RAYNET Tech Task</h1>

          <FilterControls
            onSearch={setSearchText}
            onStateChange={setSelectedState}
            onRoleChange={setSelectedRole}
          />

          <DataTable
            columns={columns}
            data={filteredData}
            customStyles={customTableStyles}
            striped
            highlightOnHover
            pagination
            noDataComponent={<NoData/>}
            onRowClicked={setSelectedClient}
          />
          {selectedClient && <ClientInfo client={selectedClient}/>}
        </div>
      )}
    </div>
  );
}

export default App;
