import {ClientsRow} from "@/types/clients/clients-row.type.ts";
import {StateEnum} from "@/enums/state.enum.ts";
import {RoleEnum} from "@/enums/role.enum.ts";
import {getStateClass} from "@/utils/getStateColor.ts";
import ShowOnMap from "@/components/ShowOnMap.tsx";

interface ClientInfoProps {
  client: ClientsRow;
}

function ClientInfo({client}: ClientInfoProps) {
  return (
    <div className="mt-5 p-5 border-black border-[3px] w-[500px]">
      <div className="flex">
        <p
          className={`mr-2 mb-2 ${getStateClass(StateEnum[client.state as keyof typeof StateEnum])}`}
        >
          {StateEnum[client.state as keyof typeof StateEnum]} {RoleEnum[client.role as keyof typeof RoleEnum]}
        </p>
      </div>
      <h2 className="text-4xl mb-3">{client.name}</h2>
      <div className="mb-3">
        <p className="mb-3">IČ: {client.regNumber || '-'}</p>
        <div className="mb-3">
          <p>{client.primaryAddress?.address?.street}</p>
          <p>{client.primaryAddress?.address.zipCode} {client.primaryAddress?.address.city}</p>
          <p>{client.primaryAddress?.address.country}</p>
        </div>
        <ShowOnMap
          street={client.primaryAddress?.address?.street as string}
          city={client.primaryAddress?.address.city as string}
          postcode={client.primaryAddress?.address.zipCode as string}
        />
      </div>
      <p className="mb-3">
        Lorem ipsum odor amet, consectetuer adipiscing elit.
        Vestibulum augue nec phasellus tortor aliquam.
        Lorem ornare sem lacinia tellus vitae luctus velit iaculis.
      </p>
      <p>Vlastník: <strong>{client.owner?.fullName}</strong></p>
    </div>
  );
}

export default ClientInfo;
