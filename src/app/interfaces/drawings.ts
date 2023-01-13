export interface Drawings {
  id: string,
  image:string,
  title:string,
  comment:string,
  date: string,
  numLikes: number,
  userId: number,
  tagId :number,
  tag:Tag
}

export interface DrawingsResponse {
  image:Drawings[]
}

export interface Tag {
  id:string,
  tag:string
}
