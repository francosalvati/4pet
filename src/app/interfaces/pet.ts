export interface Pet {
  birthday: Date;
  castrated: boolean;
  color: string;
  gender: string;
  chip: boolean;
  name: string;
  photo: string;
  race: string;
  specie: string;
  weight: number;
}

export interface History extends Pet{
  comments: string;
  date: Date;
  reason: string;
}

export interface Vacination extends History{
  date: Date;
  document: string;
  type: string;
}

export interface Test extends History{
  date: Date;
  document: string;
  type: string;
}
