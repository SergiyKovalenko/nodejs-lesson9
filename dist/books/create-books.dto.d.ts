export declare class CreateBookPublishedDto {
    readonly publisher: string;
    readonly year: number;
}
export declare class CreateBookDto {
    blogpost: string;
    title: string;
    author: string;
    published: CreateBookPublishedDto;
}
