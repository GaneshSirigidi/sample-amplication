import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
