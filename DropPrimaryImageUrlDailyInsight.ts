import { MigrationInterface, QueryRunner } from 'typeorm';

export class DropPrimaryImageUrlDailyInsight1787268284793
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        const hasColumn = await queryRunner.hasColumn(
            'daily_insight',
            'primaryImageUrl',
        );
        if (hasColumn) {
            await queryRunner.dropColumn('daily_insight', 'primaryImageUrl');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
