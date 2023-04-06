import { DetailedHTMLProps } from 'react';

export interface CardsProps {
  _id: string;
  index: number;
  isActive: boolean;
  balance: string;
  url: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  registered: string;
}

export type TQuery = {
  query: string;
};

export type CardsPropsAPI = DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  TQuery;

export interface ISearchResults {
  total: number;
  total_pages: number;
  results: ICards[];
}

export interface ICards {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  urls: ICardsUrls;
  links: ICardsLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: ICardsSponsorship;
  topic_submissions: string;
  user: IUser;
}

export interface ICardsLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface ICardsSponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: IUser;
}

export interface IUser {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: null;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: ICardsUserLinks;
  profile_image: ICardsProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: ICardsSocial;
}

export interface ICardsUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ICardsProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface ICardsSocial {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: null;
}

export interface ICardsUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
