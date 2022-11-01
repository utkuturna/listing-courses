import { ICourseItem } from './course';

export interface ICourseDetail extends ICourseItem {
  description: string;
}

export interface ICourseDetailResponse {
  result: ICourseDetail;
}
