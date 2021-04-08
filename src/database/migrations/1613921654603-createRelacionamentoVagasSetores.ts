import {MigrationInterface, QueryRunner} from "typeorm";

export class createRelacionamentoVagasSetores1613921654603 implements MigrationInterface {
    name = 'createRelacionamentoVagasSetores1613921654603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vagas" ADD "setorvagaId" uuid`);
        await queryRunner.query(`ALTER TABLE "vagas" ADD CONSTRAINT "FK_df7b3e03a6ee295164f5b6ca5d1" FOREIGN KEY ("setorvagaId") REFERENCES "setores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vagas" DROP CONSTRAINT "FK_df7b3e03a6ee295164f5b6ca5d1"`);
        await queryRunner.query(`ALTER TABLE "vagas" DROP COLUMN "setorvagaId"`);
    }

}
