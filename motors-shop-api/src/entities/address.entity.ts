import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  cep: number;

  @Column({ length: 250 })
  state: string;

  @Column({ length: 250 })
  city: string;

  @Column({ length: 250 })
  street: string;

  @Column({ length: 250 })
  number: string;

  @Column({ length: 250, nullable: true })
  complement: string;

  @CreateDateColumn()
  date_creation: Date;

  @UpdateDateColumn()
  date_update: Date;
}
