import {Sector} from "./Sector";

export interface User {
  id?: number;
  name: string;
  agreeToTerms: boolean;
  sectors: Sector[];
}
