import { MigrationInterface, QueryRunner } from "typeorm";

export class dataUpdateComments1678296493310 implements MigrationInterface {
  name = "dataUpdateComments1678296493310";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comments" ADD "date_update" TIMESTAMP NOT NULL DEFAULT now()`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "date_update"`);
  }
}
