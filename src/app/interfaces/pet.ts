export interface Pet {
  owner_fk: string;
  name: string;
  birthday: Date;
  species: string;
  race: string;
  gender: string;
  castrated: boolean;
  weight: number;
  color: string;
  has_chip: boolean;
  photo: string;
  id: string;
}

export interface History{
  comments: string;
  date: Date;
  reason: string;
}

export interface Vacination{
  date: Date;
  document: string;
  type: string;
}

export interface Test{
  date: Date;
  document: string;
  type: string;
}
