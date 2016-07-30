import { BrandDTO, CategoryDTO, ImageDTO, ImageIconDTO } from './';
import { DtoType } from '../';

export interface ProductDTO {
    brand: BrandDTO;
    category: CategoryDTO;
    model: string;
    name: string;
    type: DtoType;
}
export interface ProductDetailsDTO {
    desctiption: string;
    specification: string;
    image: ImageDTO;
    images: ImageDTO[];
    productIcon: ImageIconDTO;
}