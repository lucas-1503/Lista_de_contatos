import * as enums from '../uteis/index'

class Contato {
  nome: string
  categoria: enums.Categoria
  email: string
  telefone: number
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    email: string,
    telefone: number,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
