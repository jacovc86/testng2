import { DtoType } from '../dataTypes';
export interface CategoryDTO {
    ancestors: CategoryDTO[];
    name: string;
    subjectName: string;
    subjectType: DtoType;
    type: DtoType;
    uuid: string;
}
