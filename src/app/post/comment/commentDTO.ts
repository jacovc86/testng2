import { UserDTO } from '../../shared/dtos';

export interface CommentDTO {
    owner: UserDTO;
    post: string;
    text: string;
    uuid: string;
}