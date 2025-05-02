import { baseHTTPUrl,baseUrlCustomers } from "../constants/apppaths";

export const getUrl = (t) => {
  if(t == "base")
      return baseHTTPUrl;
  else if(t == "customers")
      return baseUrlCustomers ;
}
