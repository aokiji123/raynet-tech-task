import {useMemo, useState} from 'react';
import Table from 'react-data-table-component';
import {ClientInfo, NoData, TableControls} from "@/components";
import {useClientsData} from '@/hooks/useClientsData.ts';
import {CLIENT_TABLE_DATA, CUSTOM_TABLE_STYLES} from "@/constants";
import {ClientType} from "@/types";

const ClientsTable = () => {
  const {clientsData, loading, error} = useClientsData();

  const [searchText, setSearchText] = useState<string>('');
  const [selectedState, setSelectedState] = useState<ClientType['state'] | null>(null);
  const [selectedRole, setSelectedRole] = useState<ClientType['role'] | null>(null);
  const [selectedClient, setSelectedClient] = useState<ClientType | null>(null);

  const filteredData = useMemo(() => {
    setSelectedClient(null)
    return (
      clientsData?.data?.filter(
        (item) =>
          item.name?.toLowerCase().includes(searchText.toLowerCase()) &&
          (!selectedState ? true : item.state === selectedState) &&
          (!selectedRole ? true : item.role === selectedRole)
      ) || []
    );
  }, [clientsData, searchText, selectedState, selectedRole]);

  return (
    <div className="p-10">
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data: {error.message}</p>}
      {clientsData && (
        <div>
          <h1 className="text-4xl mb-5">RAYNET Tech Task</h1>

          <TableControls
            onSearch={setSearchText}
            onStateChange={setSelectedState}
            onRoleChange={setSelectedRole}
          />

          <Table
            columns={CLIENT_TABLE_DATA}
            data={filteredData}
            customStyles={CUSTOM_TABLE_STYLES}
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

export default ClientsTable;
