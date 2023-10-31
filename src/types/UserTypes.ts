export type UserType = 'student' | 'teacher'

export interface UserRegister {
  name: string
  email: string
  password: string
  userType: UserType
}
