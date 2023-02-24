import { MigrationInterface, QueryRunner } from "typeorm";

export class changingNumber1677175624653 implements MigrationInterface {
    name = 'changingNumber1677175624653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "tel" character varying(30) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "tel" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" integer NOT NULL`);
    }

}
