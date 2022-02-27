export interface PostInterface {
    readonly _id : number,
    title : string,
    image?: string , 
    content : string,
    author? : string,
    like? : number,
    comment? : [],
    categoryId?: number,
    createdDate?: string,
    tag?: string
}