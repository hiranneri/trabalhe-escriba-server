import {MigrationInterface, QueryRunner} from "typeorm";

export class createSetores1613920875410 implements MigrationInterface {
    name = 'createSetores1613920875410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "setores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, CONSTRAINT "PK_85908551895de8d968532c35d07" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "setores"`);
    }

}
