import { BillType } from "./bill-type.enum";

export interface Bill {
    id: string;
    createdDate: any;
    involvedRoommate: string[];
    isPaid: boolean;
    name: string;
    paidRoommate: string[];
    total: number;
    type: BillType
}