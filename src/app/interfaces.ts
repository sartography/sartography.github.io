export interface CaseStudy {
  projectName: string;
  tagLine: string;
  description: string;
  organizationName: string;
  imageLink: string;
  featureLink: string;
  testimonials?: Testimonial[];
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  link?: string;
  caseStudy?: CaseStudy;
}


