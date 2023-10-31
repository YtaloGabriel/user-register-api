import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Desafio Upbase',
      version: '1.0.0',
      description:
        'API de cadastro de usuários criada para o desafio de estágio da Upbase',
    },
  },
  apis: ['./src/routes/*/*.ts'],
}

export const swaggerSpec = swaggerJSDoc(options)
