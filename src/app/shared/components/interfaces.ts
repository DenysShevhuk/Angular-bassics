export interface Post {
  id?: string;
  sender: string;
  address: string;
  contact: string;
  phone: number;
  weight: number;
  data: Date;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface FbCreateResponse {
  name: string;
}

export interface User {
  returnSecureToken?: boolean;
  email: string;
  password: string;
}

export interface UserRegister {
  email: string;
  password: string;
  name: string;
  returnSecureToken?: boolean;
}

export interface Offer {
  id?: string;
  email: string;
  name: string;
  message: string;
  date: Date;
}

export interface FbCreateResponse {
  name: string;
}
