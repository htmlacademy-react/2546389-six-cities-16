import { Host } from './host';

export type Reviews = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}
