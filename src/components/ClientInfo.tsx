import {ClientType} from "@/types";
import {ShowOnMapLink} from "@/components";
import {RoleEnum, StateEnum} from "@/enums";
import {getStateClass} from "@/utils/getStateColor.ts";
import {memo} from "react";

interface ClientInfoProps {
  client: ClientType;
}

const ClientInfo = memo(({client}: ClientInfoProps) => {
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
        <ShowOnMapLink
          street={client.primaryAddress?.address?.street}
          city={client.primaryAddress?.address.city}
          postcode={client.primaryAddress?.address.zipCode}
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
})

export default ClientInfo;
