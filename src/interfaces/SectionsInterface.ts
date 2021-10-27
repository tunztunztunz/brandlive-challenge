import { ReactNode } from "react";

// I chose to make backgroundColor mandatory so there is a fallback color if an image fails to load.
export interface SectionInterface {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundColor: string;
}