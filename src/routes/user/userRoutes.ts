import express from 'express'
import { userRegister } from '../../controllers/user/userRegister'

const app = express()

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome e Sobrenome.
 *                 required: true
 *                 example: John Doe
 *               userName:
 *                 type: string
 *                 description: Nome de usuário.
 *                 required: true
 *                 example: john-doe
 *                 unique: true
 *               email:
 *                 type: string
 *                 description: E-mail do usuário.
 *                 required: true
 *                 example: john-doe@email.com
 *                 unique: true
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *                 required: true
 *                 example: johndoe123
 *               confirmedPassword:
 *                 type: string
 *                 description: Confirmação de senha do usuário.
 *                 required: true
 *                 example: johndoe123
 *               userType:
 *                 type: string
 *                 description: Tipo de usuário.
 *                 enum: [student, teacher]
 *                 required: false
 *                 example: student
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso!
 *       401:
 *         description: Usuário já cadastrado.
 */

export const userCreate = app.post('/api/users/register', (req, res) => {
  userRegister(req, res)
})
