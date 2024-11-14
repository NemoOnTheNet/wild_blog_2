export interface Article {
    id: number;
    title: string;
    content: string;
    image: string;
    createDate: Date;
    isPublished: boolean;
    likeCount: number;
    categoryName: string;
    isLiked: boolean;
}
