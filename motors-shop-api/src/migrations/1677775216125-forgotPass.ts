import { MigrationInterface, QueryRunner } from "typeorm";

export class forgotPass1677775216125 implements MigrationInterface {
    name = 'forgotPass1677775216125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_c6eb61588205e25a848ba6105cd"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "reset_password_token" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "reset_password_expires" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "tel" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_c6eb61588205e25a848ba6105cd" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_c6eb61588205e25a848ba6105cd"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "tel" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "reset_password_expires"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "reset_password_token"`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_c6eb61588205e25a848ba6105cd" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
