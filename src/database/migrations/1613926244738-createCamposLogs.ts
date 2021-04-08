import {MigrationInterface, QueryRunner} from "typeorm";

export class createCamposLogs1613926244738 implements MigrationInterface {
    name = 'createCamposLogs1613926244738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vagas" ADD "created_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "vagas" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "setores" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "setores" DROP COLUMN "updated_At"`);
        await queryRunner.query(`ALTER TABLE "vagas" DROP COLUMN "updated_At"`);
        await queryRunner.query(`ALTER TABLE "vagas" DROP COLUMN "created_At"`);
    }

}
