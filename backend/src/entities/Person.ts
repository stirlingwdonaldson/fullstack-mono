import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity({ name: 'Person' })
export class Person {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number
  @Column({ name: 'Name', type: 'varchar', length: 50 })
  name!: string
  @Column({ name: 'Age', type: 'int' })
  age!: number
}
