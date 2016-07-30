import { UserDTO, ReasonType } from '../../shared';
export interface FeedReasonDTO {
    price: number;
    quantity: number;
    subject: UserDTO;
    type: ReasonType;
}
