import {MigrationInterface, QueryRunner} from "typeorm";

export class createVagas1613920537837 implements MigrationInterface {
    name = 'createVagas1613920537837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vagas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "datapublicacao" TIMESTAMP NOT NULL, "descricao" character varying NOT NULL, "requisitos" character varying(1000) NOT NULL, "atividades" character varying(2000) NOT NULL, "beneficios" character varying(1000) NOT NULL, "preenchida" boolean NOT NULL, CONSTRAINT "PK_b58a2d48de86b90e87f2a324e54" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vagas"`);
    }

}
