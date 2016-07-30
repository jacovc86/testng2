import { ImageDTO, ImageIconDTO } from './imageDTO';
import { UserType, AuthType, WebsiteSource, DtoType } from '../dataTypes';

export interface UserMinDTO {
    displayName: string;
    profileIcon: ImageIconDTO;
    profileImage: ImageDTO;
    uuid: string;
}

export interface UserDTO extends UserMinDTO {
    contactEmail: string;
    email: string;
    enlistedEmails: string[];
    searchImage: ImageDTO;
    type: DtoType;
    userType: UserType;
    backAccountInfo: string;
}

interface UserDetailsDTO extends UserDTO {
    contactEmail: string;
    firstName: string;
    lastName: string;
    phone: string;
    allowFbPublish: boolean;
    authType: AuthType;
    source: WebsiteSource;

}
export interface ShopperDTO extends UserDetailsDTO {
    savedAmount: number;
    cashbackAmount: number;
    pendingCashbackAmount: number;
}