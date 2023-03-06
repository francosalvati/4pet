export interface User {
  adress: string;
  birthday: Date;
  country: string;
  email: string;
  gender: string;
  name: string;
  phone: string;
  pets: number;
}


export interface Veterinary extends User{
  veterinary: string;
}
