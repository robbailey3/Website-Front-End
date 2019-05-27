export interface Photo {
  photoID: string;
  path: string;
  thumbnail_path?: any;
  caption?: any;
  albumID: string;
  exif: object | any;
  aspectRatio: number;
  height?: number;
  width?: number;
}
