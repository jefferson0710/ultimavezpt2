import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public username!: string

  @column()
  public email!: string

  @column()
  public password!: string

  @column()
  public name!: string

  @column()
  public idade!: number

  @column()
  public nascimento!: DateTime

  @column()
  public cpf!: string

  @column()
  public ceffito!: string

  @column()
  public lembre_se!: string

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}
