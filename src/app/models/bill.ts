import { BillType } from "./bill-type.enum";

export interface Bill {
    createdDate: Date;
    involvedRoommate: string[];
    isPaid: boolean;
    name: string;
    paidRoommate: string[];
    total: number;
    type: BillType
}