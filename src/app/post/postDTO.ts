import { CommentDTO } from './comment';
import { UserDTO, UserMinDTO } from '../shared';
import { OfferPriceDTO, FeedReasonDTO } from './shared';
import { PostType, DeliveryOption, ProductDTO, ProductDetailsDTO, ImageDTO } from '../shared';

export interface PostDTO {
    comments: CommentDTO[];
    creator: UserDTO;
    creationDate: number;
    keywords: string[];
    type: PostType;
    picQualityRank: number;
    textQualityRank: number;
    rank: number;
    uuid: string;
}
export interface OfferDTO extends PostDTO {
    availabilityExpectancy: number;
    currentStepIndex: number;
    deliveryOption: DeliveryOption;
    expirationDate: number;
    isFull: boolean;
    isPickupAvailable: boolean;
    retailPrice: number;
    priceBought: number;
    nextPrice: number;
    shippingCosts: number;
    offerNumber: string;
    offerPrices: OfferPriceDTO[];
    product: ProductDTO;
    productDetails: ProductDetailsDTO;
    quantityBought: number;
    quantityForStepCompletion: number;
    quantityPending: number;
    shoppingGroups: ShoppingGroupDTO[];
    type: PostType;
    updateDate: number;
}
export interface ShoppingGroupDTO extends PostDTO {
    creators: UserDTO[];
    freeText: string;
    isMember: boolean;
    image: ImageDTO;
    images: ImageDTO[];
    members: UserMinDTO[];
    totalFriends: number;
    totalMembers: number;
}

export interface FeedPostDTO extends PostDTO {
    reason: FeedReasonDTO;
}

export interface FeedOfferDTO extends OfferDTO {
    reason: FeedReasonDTO;
}

export interface FeedShoppingGroupDTO extends ShoppingGroupDTO {
    reason: FeedReasonDTO;
}