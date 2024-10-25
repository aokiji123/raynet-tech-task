export type ClientRow = {
  id: number;
  name: string;
  person: boolean;
  firstName: string | null;
  lastName: string | null;
  titleBefore: string | null;
  titleAfter: string | null;
  salutation: string | null;
  owner: Owner;
  rating: string;
  state: string;
  role: string;
  notice: string;
  category: IdValuePair;
  contactSource: IdValuePair;
  employeesNumber: IdValuePair;
  legalForm: IdValuePair;
  paymentTerm: IdValuePair;
  turnover: IdValuePair;
  economyActivity: IdValuePair;
  companyClassification1: IdValuePair;
  companyClassification2: IdValuePair;
  companyClassification3: IdValuePair;
  regNumber: string;
  taxNumber: string;
  taxNumber2: string | null;
  taxPayer: string;
  bankAccount: string;
  databox: string | null;
  court: string | null;
  birthday: string | null;
  primaryAddress: AddressDetail;
  tags: string[];
  logo: FileDetail | null;
  socialNetworkContact: SocialNetworkContact;
  customFields: CustomFields;
  rowInfo: RowInfo;
  _version: number;
  attachments: Attachment[];
  addresses: AddressDetail[];
  inlineGdpr: GdprInfo[];
  originLead: OriginLead | null;
}

type Owner = {
  id: number;
  fullName: string;
}

type IdValuePair = {
  id: number;
  value: string;
}

type AddressDetail = {
  id: number;
  primary: boolean;
  contactAddress: boolean;
  address: Address;
  territory: IdValuePair;
  contactInfo: ContactInfo;
  extIds: any | null;
}

type Address = {
  id: number;
  city: string;
  country: string;
  name: string;
  province: string;
  street: string;
  zipCode: string;
  lat: number | null;
  lng: number | null;
}

type ContactInfo = {
  email: string;
  email2: string | null;
  primary: boolean;
  tel1: string;
  tel1Type: string;
  tel2: string;
  tel2Type: string;
  www: string | null;
  otherContact: string | null;
}

type FileDetail = {
  id: number;
  contentType: string;
  fileName: string;
  size: number;
}

type SocialNetworkContact = {
  facebook: string | null;
  googleplus: string | null;
  twitter: string | null;
  linkedin: string | null;
  pinterest: string | null;
  instagram: string | null;
  skype: string | null;
  youtube: string | null;
}

type CustomFields = {
  Cislo_klie_cd702: string;
  Lonsky_zis_7aac1: number;
  Spoluprace_2aa2c: string;
}

type RowInfo = {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  rowAccess: any | null;
  rowState: any | null;
}

type Attachment = {
  id: number;
  link: string | null;
  linkName: string | null;
  file: FileDetail;
  folder: string;
  folderId: number;
}

type GdprInfo = {
  id: number;
  validFrom: string;
  validTill: string;
  legalTitle: string;
  templateName: string;
  gdprTemplate: number;
}

type OriginLead = {
  id: number;
  code: string;
  topic: string;
}
