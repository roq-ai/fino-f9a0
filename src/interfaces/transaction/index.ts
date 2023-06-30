import { UserInterface } from 'interfaces/user';
import { BankInterface } from 'interfaces/bank';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  amount: number;
  type: string;
  user_id?: string;
  bank_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  bank?: BankInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  user_id?: string;
  bank_id?: string;
}
