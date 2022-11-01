export interface ICourseItem {
  id: number;
  name: string;
}

export interface ICourseResponse {
  count: number;
  result: ICourseItem[];
}
