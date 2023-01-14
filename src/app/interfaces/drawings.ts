import { Profile } from "./profile"

export interface Drawings {
  id?: string,
  image?:string,
  title:string,
  comment:string,
  date?: string,
  numLikes?: number,
  userId: number,
  tagId? :number,
  tag?:Tag,
  user?:Profile
}

export interface DrawingsResponse {
  image:Drawings[]
}

export interface DrawingResponse {
  image:Drawings
}

export interface newDrawingResponse {
  newImage:Drawings
}

export interface Tag {
  id:string,
  tag:string
}

export interface TagResponse {
  resultTags:Tag[]
}

export interface DrawingComment {
  id:number,
  comment:string,
  date:string
  userId:number,
  imageId:number,
  user:Profile
}

export interface DrawingCommentResponse {
  commentData:DrawingComment[]
}
