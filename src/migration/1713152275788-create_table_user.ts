import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1713152275788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                id uuid PRIMARY KEY,
                name varchar(255) NOT NULL,
                email varchar(255) NOT NULL,
                password varchar(255) NOT NULL,
                createdAt varchar(255) NOT NULL,
                updatedAt varchar(255) NOT NULL
            );
        `);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
