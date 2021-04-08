import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import {Setores} from './Setores'

@Entity('vagas')
export class Vagas extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    datapublicacao:Date

    @Column()
    descricao: string

    @Column({length:1000})
    requisitos:string

    @Column({length:2000})
    atividades:string

    @Column({length:1000})
    beneficios:string
    
    @Column()
    preenchida:boolean

    @OneToMany(type=> Setores, vaga=>Vagas)
    @JoinColumn({name:'setorvagaId'})
    setorvaga:Setores

    @CreateDateColumn()
    created_At: Date;
    
    @UpdateDateColumn()
    updated_At: Date;


   
   
}