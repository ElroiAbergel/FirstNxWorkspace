export interface NetflixDataModel{
    Image_URL: string;
    title: string;
    type: string;
    listed_in: string;
}
  
 export interface OriginalDataModel extends NetflixDataModel {
    description: string;
    release_year: number;
  }
  