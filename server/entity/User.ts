import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

export const entityName = "user";

@Entity({ name: entityName })
@Unique(["username"])
@Unique(["email"])
export class User {
  static entityName = entityName;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;
}
