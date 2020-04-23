export declare class BookInput {
    readonly blogpost: string;
    readonly title: string;
    readonly author: string;
    readonly published: Array<{
        publisher: string;
        year: number;
    }>;
}
