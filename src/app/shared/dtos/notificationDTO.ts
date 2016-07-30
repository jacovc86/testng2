import { UserDTO, ImageDTO } from './';
import { PostType, NotificationType, NotificationRelationType } from '../dataTypes';

interface PostObject {
    creator: UserDTO;
    image: ImageDTO;
    postType: PostType;
    uuid: string;
}

export interface NotificationDTO {
    date: number;
    isRead: boolean;
    object: PostObject;
    refObject: PostObject;
    relatedToPost: NotificationRelationType;
    subject: UserDTO;
    type: NotificationType;
}
