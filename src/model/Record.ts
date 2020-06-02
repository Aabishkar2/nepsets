import { Table, Column, Model, PrimaryKey, AllowNull, DataType, IsUUID, Default } from 'sequelize-typescript'

@Table({})
export class Record extends Model<Record> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.STRING(36))
  public id: string

  @AllowNull(false)
  @Column(DataType.STRING(50))
  public date: string

  @AllowNull(false)
  @Column(DataType.TEXT())
  public record: string
}
