export interface Scene {
  id: number;
  background_url: string;
  hitzones: {
    x: string;
    y: string;
    goto: number;
  }[];
}