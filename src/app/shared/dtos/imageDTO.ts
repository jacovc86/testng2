export interface ImageDTO {
    contentType: string;
    data: string;
    fullPath: string;
    key: string;
    path: string;
    width: number;
    height: number;
}
export interface ImageIconDTO extends ImageDTO {}