import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class addManyToManyDailyInsightImageAttachments1687457383824
    implements MigrationInterface
{
    tableName = 'attachment_daily_insight';

    public async up(queryRunner: QueryRunner): Promise<void> {
        let hasTable = await queryRunner.hasTable(this.tableName);
        if (!hasTable) {
            await queryRunner.createTable(
                new Table({
                    name: this.tableName,
                    columns: [
                        {
                            name: 'id',
                            type: 'varchar',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                        },
                        {
                            name: 'orderIndex',
                            type: 'int',
                            default: 0,
                        },
                        {
                            name: 'dailyInsightId',
                            type: 'varchar',
                            generationStrategy: 'uuid',
                        },
                        {
                            name: 'attachmentId',
                            type: 'varchar',
                            generationStrategy: 'uuid',
                        },
                    ],
                }),
                true,
            );

            await queryRunner.createForeignKeys(this.tableName, [
                new TableForeignKey({
                    columnNames: ['dailyInsightId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'daily_insight',
                    onDelete: 'CASCADE',
                }),
                new TableForeignKey({
                    columnNames: ['attachmentId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'attachment',
                    onDelete: 'CASCADE',
                }),
            ]);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName, true, true);
    }
}
