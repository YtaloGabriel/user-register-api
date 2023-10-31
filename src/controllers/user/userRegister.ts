import { Request, Response } from 'express'
import { db } from '../../services/db'
import { User } from '../../schemas/userRegisterSchema'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

export async function userRegister(req: Request, res: Response) {
  const { name, userName, email, password, confirmedPassword, userType } =
    req.body

  if (!name || !email || !password || !confirmedPassword) {
    res.json({ message: 'Preencha todos os campos obrigatórios.' }).status(401)
    return
  }

  if (password !== confirmedPassword) {
    res.json({ message: 'As senhas devem ser iguais.' }).status(401)
    return
  }

  if (userType && userType !== 'student' && userType !== 'teacher') {
    res.json({ message: 'Tipo de usuário inválido.' }).status(401)
    return
  }

  await db.sync()

  const checkUserAlreadyExists = await User.findOne({
    where: { email },
  }).then((user) => {
    if (user) {
      res.json({ message: 'Usuário já cadastrado.' }).status(401)
      return true
    }
  })

  if (checkUserAlreadyExists) return

  const encryptedPassword = await bcrypt.hash(
    password,
    Number(process.env.BCRYPT_ROUNDS),
  )

  await User.create({
    name,
    email,
    password: encryptedPassword,
    userType: userType ?? 'student',
    userName,
  })

  res.json({ message: 'Usuário criado com sucesso!' }).status(201)
}
