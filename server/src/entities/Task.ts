import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from "typeorm";

import { Proprity } from "./enums/Priority";
import { Status } from "./enums/Status";

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  title: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  date: string;

  @Column({
    type: "longtext",
  })
  description: string;

  @Column({
    type: "enum",
    enum: Proprity,
    default: Proprity.normal,
  })
  priority: Proprity;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.todo,
  })
  status: Status;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
