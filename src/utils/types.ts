export type PageLinkType = {
  id: number;
  href: string;
  text: string;
};

export type SocialLinkType = {
  id: number;
  href: string;
  icon: string;
};

export type ServiceType = {
  id: number;
  icon: string;
  title: string;
  text: string;
};

export type TourType = {
  id: number;
  image: string;
  date: string;
  title: string;
  info: string;
  location: string;
  duration: number;
  cost: number;
};
