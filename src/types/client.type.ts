import {RoleEnum, StateEnum} from "@/enums";

type ClientType = {
  id: number;
  name: string;
  titleBefore: string | null;
  firstName: string | null;
  lastName: string | null;
  titleAfter: string | null;
  person: boolean;
  role: RoleEnum;
  state: StateEnum;
  rating: string | null;
  owner: {
    id: number;
    fullName: string;
  } | null;
  regNumber: string;
  taxNumber: string;
  taxNumber2: string | null;
  taxPayer: string | null;
  bankAccount: string | null;
  databox: string | null;
  court: string | null;
  primaryAddress: {
    id: number;
    primary: boolean;
    contactAddress: boolean;
    address: {
      id: number;
      city: string;
      country: string;
      countryCode: string;
      name: string;
      province: string | null;
      street: string;
      zipCode: string;
      lat: number;
      lng: number;
    };
    contactInfo: {
      primary: boolean;
      email: string;
      email2: string | null;
      tel1: string | null;
      tel1Type: string | null;
      tel2: string | null;
      tel2Type: string | null;
      fax: string | null;
      www: string;
      otherContact: string | null;
      doNotSendMM: boolean;
    };
    territory: string | null;
  } | null;
  category: string | null;
  turnover: string | null;
  economyActivity: string | null;
  companyClassification1: string | null;
  companyClassification2: string | null;
  companyClassification3: string | null;
  paymentTerm: {
    id: number;
    value: string;
  } | null;
  contactSource: string | null;
  birthday: string | null;
  notice: string | null;
  tags: string[];
  customFields: Record<string, unknown>;
  attachments: string | null;
  rowInfo: {
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
    rowAccess: string | null;
    rowState: string | null;
  };
  securityLevel: {
    id: number;
    name: string;
  } | null;
  inlineGdpr: string[];
  _version: number;
};

export default ClientType
