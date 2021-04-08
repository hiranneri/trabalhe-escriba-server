import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Vagas } from './Vagas'

@Entity('setores')
export  class Setores extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    nome:string

    @ManyToOne(type=>Vagas, setorvaga=>Setores)
    vaga:Vagas

    @Column({nullable:true})
    idArea:number

    @UpdateDateColumn()
    updated_At: Date;
   
}