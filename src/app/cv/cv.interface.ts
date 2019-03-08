
export interface Location {
  city: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
  svg: string;
}

export interface Basics {
  name: string;
  profile: string;
  website: string;
  jobTitle: string;
  location: Location;
  contact: Contact;
  profiles: Profile[];
}

export interface Workexperience {
  company: string;
  position: string;
  logo: string;
  startDate: string;
  endDate: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  highlights: string[];
}

export interface Detail {
  subject: string;
  grade: string;
}

export interface Education {
  institution: string;
  qualification: string;
  summary: string;
  details: Detail[];
}

export interface Hobby {
  name: string;
  summary: string;
  keywords: string[];
}

export interface Content {
  name: string;
  rating: string;
}

export interface Skill {
  title: string;
  summary: string;
  content: Content[];
}

export interface CV {
  basics: Basics;
  workexperience: Workexperience[];
  education: Education[];
  hobbies: Hobby[];
  skills: Skill[];
}
