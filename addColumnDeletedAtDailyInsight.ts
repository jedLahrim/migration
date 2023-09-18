import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnDeletedAtDailyInsight1687430677234
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        const hasDeletedAt = await queryRunner.hasColumn(
            'daily_insight',
            'deletedAt',
        );
        if (!hasDeletedAt) {
            await queryRunner.addColumn(
                'daily_insight',
                new TableColumn({
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true,
                }),
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('daily_insight', 'deletedAt');
    }
}
