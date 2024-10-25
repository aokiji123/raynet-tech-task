import {ClientsRow} from "@/types/clients/clients-row.type.ts";

export type ClientsData = {
  success: boolean,
  totalCount: number,
  data: ClientsRow[];
};
