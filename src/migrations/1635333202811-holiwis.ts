import {MigrationInterface, QueryRunner} from "typeorm";

export class holiwis1635333202811 implements MigrationInterface {
    name = 'holiwis1635333202811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accessory_status" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_7e86450440cca3d949658ec1e05" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accessory" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "description" character varying NOT NULL, "high_drop" boolean NOT NULL, CONSTRAINT "PK_e1ead99f958789eeebd86246d74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "career_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "plan" character varying NOT NULL, "level" integer NOT NULL, CONSTRAINT "PK_80de05cef228bb276c0ff59f7ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "career" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "plan" character varying NOT NULL, "level" integer NOT NULL, CONSTRAINT "PK_5f694c0aa9babcae2c4ad61c7d0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "endowment_detail" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "measure" character varying NOT NULL, "quantity" integer NOT NULL, "high_drop" boolean NOT NULL, CONSTRAINT "PK_848ffd917c64ae353851af2ae2c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "endowment" ("id" SERIAL NOT NULL, "validated" boolean NOT NULL, "high_drop" boolean NOT NULL, CONSTRAINT "PK_3e27d01c4776e255a84e8a3ea9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "equipment_status" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b910fdc15a6d057ffaf2fe81d7b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "equipment" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "description" character varying NOT NULL, "is_available" boolean NOT NULL, "loanable" boolean NOT NULL, "high_drop" boolean NOT NULL, CONSTRAINT "PK_0722e1b9d6eb19f5874c1678740" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "faculty" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "abbreviation" character varying NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_635ca3484f9c747b6635a494ad9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "kardex" ("id" SERIAL NOT NULL, CONSTRAINT "PK_ca0b846246b435ff5032b73202b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "material" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "measure" character varying NOT NULL, "quantity" integer NOT NULL, "high_drop" boolean NOT NULL, CONSTRAINT "PK_0343d0d577f3effc2054cbaca7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "module" ("id" SERIAL NOT NULL, "identification" character varying NOT NULL, CONSTRAINT "PK_0e20d657f968b051e674fbe3117" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "offer" ("id" SERIAL NOT NULL, CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "place_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_012517e275c3ca2b782a7cddafd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "place" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "place_code" character varying NOT NULL, "capacity" integer NOT NULL, "high_drop" boolean NOT NULL, CONSTRAINT "PK_96ab91d43aa89c5de1b59ee7cca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report" ("id" SERIAL NOT NULL, CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "high_drop" boolean NOT NULL, CONSTRAINT "PK_40410d6bf0bedb43f9cadae6fef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "university" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "abbreviation" character varying NOT NULL, CONSTRAINT "PK_d14e5687dbd51fd7a915c22ac13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "university"`);
        await queryRunner.query(`DROP TABLE "type"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "report"`);
        await queryRunner.query(`DROP TABLE "place"`);
        await queryRunner.query(`DROP TABLE "place_type"`);
        await queryRunner.query(`DROP TABLE "offer"`);
        await queryRunner.query(`DROP TABLE "module"`);
        await queryRunner.query(`DROP TABLE "material"`);
        await queryRunner.query(`DROP TABLE "kardex"`);
        await queryRunner.query(`DROP TABLE "faculty"`);
        await queryRunner.query(`DROP TABLE "equipment"`);
        await queryRunner.query(`DROP TABLE "equipment_status"`);
        await queryRunner.query(`DROP TABLE "endowment"`);
        await queryRunner.query(`DROP TABLE "endowment_detail"`);
        await queryRunner.query(`DROP TABLE "career"`);
        await queryRunner.query(`DROP TABLE "career_type"`);
        await queryRunner.query(`DROP TABLE "accessory"`);
        await queryRunner.query(`DROP TABLE "accessory_status"`);
    }

}
