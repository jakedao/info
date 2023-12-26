export interface IUserInfo {
  phone: string;
  email: string;
  skype?: string;
  linkedIn?: string;
  git?: string;
}

export type TExpertises = {
  common: string[];
  main: string[];
  others?: string[];
};

export type TCompanyInfo = {
  logo: string;
  name: string;
};

export type TSkill = string | { content: string; sub: string[] };

export interface IExperience {
  companyInfo: TCompanyInfo;
  domain?: string;
  description?: string;
  position: string;
  duration: string;
  skills: TSkill[];
  responsibilities: string[];
}
