import { StaticImageData } from "next/image";

export interface Certificates {
  image: string | StaticImageData;
  title: string;
  description: string
}