import {MigrationInterface, QueryRunner} from "typeorm";

export class populateSetores1613926312387 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO setores (nome) VALUES ('Administrativas')`);
        await queryRunner.query(`INSERT INTO setores (nome) VALUES ('Comerciais')`);
        await queryRunner.query(`INSERT INTO setores (nome) VALUES ('Técnicas')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM setores where nome = 'Adminstrativas'`);
        await queryRunner.query(`DELETE FROM setores where nome = 'Comerciais'`);
        await queryRunner.query(`DELETE FROM setores where nome = 'Técnicas'`);
    }

}
