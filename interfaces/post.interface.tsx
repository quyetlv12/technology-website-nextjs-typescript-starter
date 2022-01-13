export interface PostInterface {
    readonly id : number,
    title : string,
    image? : string , 
    content : string,
    author? : string,
    like? : number,
    comment? : [],
    categoryId : number,
}