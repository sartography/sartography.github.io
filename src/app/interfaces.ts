export interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageLink: string;
  gitHubLink: string;
  linkedInLink: string;
}

export interface CaseStudy {
  projectName: string;
  tagLine: string;
  description: string;
  organizationName: string;
  websiteLink: string;
  gitHubLink: string;
  imageLink: string;
  featureLink: string;
  testimonials?: Testimonial[];
}

export interface Testimonial {
  name: string;
  title?: string;
  quote: string;
  link?: string;
  caseStudy?: CaseStudy;
}


