import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";


export interface ConnectedUserCreationAttrs {
  id: number;
  socketId: string;
  user: UserGroup;
}

@Table({tableName: 'players', createdAt: false, updatedAt: false})
export class ConnectedUser extends Model<ConnectedUser, ConnectedUserCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true})
  socketId: string;

  // @ManyToOne(() => UserEntity, user => user.connections)
  // @JoinColumn()
  // user: UserEntity;
  @ForeignKey(() => Player)
  @Column({type: DataType.INTEGER })
  userGroupId: number;


}