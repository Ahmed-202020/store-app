export interface Register {
  first_name: string ,
  last_name: string ,
  email: string,
  password: string,
  age: string | number
}
export interface Login {
  email: string,
  password: string,
}
export interface Logout {
  token:string
}

