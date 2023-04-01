export interface Pet {
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
  pet_id: string;
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
