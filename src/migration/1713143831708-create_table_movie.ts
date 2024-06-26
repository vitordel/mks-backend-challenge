import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableMovie1713143831708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE movie (
                id uuid PRIMARY KEY,
                title varchar(255) NOT NULL,
                synopsis text NOT NULL,
                cover varchar(255) NOT NULL,
                duration int NOT NULL,
                rating float NOT NULL,
                createdAt varchar(255) NOT NULL,
                updatedAt varchar(255) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE movie`);
    }

}
