import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnMaxConsumingVerifcationCode1687460673522
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        const hasColumn = await queryRunner.hasColumn(
            'verification_code',
            'maxConsuming',
        );

        if (!hasColumn) {
            await queryRunner.addColumns('verification_code', [
                new TableColumn({
                    name: 'maxConsuming',
                    type: 'int',
                    isNullable: false,
                    default: 1,
                }),
                new TableColumn({
                    name: 'consumedTimes',
                    type: 'int',
                    isNullable: false,
                    default: 0,
                }),
            ]);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
