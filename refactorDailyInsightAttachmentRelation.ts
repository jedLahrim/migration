import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class refactorDailyInsightAttachmentRelation1687430792598
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        // drop primaryImageAttachment if exist
        const hasPrimaryImageAttachment = await queryRunner.hasColumn(
            'daily_insight',
            'primaryImageAttachment',
        );
        if (hasPrimaryImageAttachment) {
            await queryRunner.dropColumn('daily_insight', 'primaryImageAttachment');
        }

        // drop primaryImageUrl if exist
        const hasPrimaryImageUrl = await queryRunner.hasColumn(
            'daily_insight',
            'primaryImageUrl',
        );
        if (hasPrimaryImageUrl) {
            await queryRunner.dropColumn('daily_insight', 'primaryImageUrl');
        }
        // create primaryImageAttachmentId as FK for attachment.id
        const hasColumnPrimaryImageAttachmentId = await queryRunner.hasColumn(
            'daily_insight',
            'primaryImageAttachmentId',
        );

        if (!hasColumnPrimaryImageAttachmentId) {
            /*await queryRunner.query(
              'ALTER TABLE daily_insight ADD COLUMN primaryImageAttachmentId VARCHAR(255)',
            );*/
            await queryRunner.addColumn(
                'daily_insight',
                new TableColumn({
                    name: 'primaryImageAttachmentId',
                    type: 'varchar',
                    isNullable: true,
                }),
            );
            await queryRunner.createForeignKey(
                'daily_insight',
                new TableForeignKey({
                    columnNames: ['primaryImageAttachmentId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'attachment',
                    onDelete: 'CASCADE',
                }),
            );
        }


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'daily_insight',
            'primaryImageAttachmentId',
        );
        await queryRunner.dropColumn('daily_insight', 'primaryImageAttachmentId');
    }
}
