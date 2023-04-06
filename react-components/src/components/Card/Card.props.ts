import { DetailedHTMLProps } from 'react';

export type TID = {
  id: string;
};

export type CardPropsAPI = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  TID;

export interface ICard {
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
  urls: Urls;
  links: ICardLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: Sponsorship;
  topic_submissions: null;
  user: User;
  exif: ICardExif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: TagsPreviewElement[];
  tags_preview: TagsPreviewElement[];
  views: number;
  downloads: number;
  topics: string[];
  related_collections: RelatedCollections;
}

export interface ICardExif {
  make: null;
  model: null;
  name: null;
  exposure_time: null;
  aperture: null;
  focal_length: null;
  iso: null;
}

export interface ICardLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  name: null;
  city: null;
  country: null;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Meta {
  index: boolean;
}

export interface RelatedCollections {
  total: number;
  type: string;
  results: Result[];
}

export interface Result {
  id: string;
  title: string;
  description: null;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  curated: boolean;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: ResultTag[];
  links: ResultLinks;
  user: User;
  cover_photo: ResultCoverPhoto;
  preview_photos: PreviewPhoto[];
}

export interface ResultCoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: ICardLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: null;
  topic_submissions: PurpleTopicSubmissions;
  user: User;
}

export interface PurpleTopicSubmissions {
  'color-of-water'?: ColorOfWater;
  'food-drink'?: FoodDrink;
}

export interface ColorOfWater {
  status: Status;
  approved_on: Date;
}

export enum Status {
  Approved = 'approved',
}

export interface FoodDrink {
  status: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
}

export interface ResultLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface PreviewPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: Urls;
}

export interface ResultTag {
  type: Type;
  title: string;
  source?: Source;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: SourceCoverPhoto;
}

export interface Ancestry {
  type: Category;
  category?: Category;
  subcategory?: Category;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface SourceCoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: null | string;
  urls: Urls;
  links: ICardLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: null;
  topic_submissions: FluffyTopicSubmissions;
  premium: boolean;
  user: User;
}

export interface FluffyTopicSubmissions {
  'current-events'?: ColorOfWater;
  'textures-patterns'?: ColorOfWater;
  nature?: ColorOfWater;
  wallpapers?: ColorOfWater;
  'architecture-interior'?: ColorOfWater;
  'color-of-water'?: ColorOfWater;
  animals?: ColorOfWater;
  health?: ColorOfWater;
  'business-work'?: ColorOfWater;
}

export enum Type {
  LandingPage = 'landing_page',
  Search = 'search',
}

export interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: User;
}

export interface TagsPreviewElement {
  type: Type;
  title: string;
}
