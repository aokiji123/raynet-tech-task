import {StateEnum} from "@/enums";

export const getStateClass = (state: StateEnum): string => {
  switch (state) {
    case StateEnum.A_POTENTIAL:
      return 'text-yellow-500';
    case StateEnum.B_ACTUAL:
      return 'text-green-500';
    case StateEnum.C_DEFERRED:
      return 'text-gray-500';
    case StateEnum.D_UNATTRACTIVE:
      return 'text-red-500';
    default:
      return 'text-black';
  }
};
