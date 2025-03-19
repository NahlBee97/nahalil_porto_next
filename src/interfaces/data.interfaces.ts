export default interface IExp {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface ISkill {
  id: number;
  image_url: string;
  name: string;
}

export interface IProjects {
  id: number;
  name: string;
  img: string;
  desc: string;
}

export interface IProjects {
  id: number;
  name: string;
  img: string;
  desc: string;
}

export interface ITestimonials {
  id: number;
  name: string;
  img: string;
  review: string;
}

export interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export interface IProjectDetail {
  id: number;
  name: string;
  image: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}
