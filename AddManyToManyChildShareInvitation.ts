import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class AddManyToManyChildShareInvitation1689267995582
    implements MigrationInterface
{
    tableName = 'child_share_invitation';
    public async up(queryRunner: QueryRunner): Promise<void> {
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
                        name: 'value',
                        type: 'varchar',
                    },
                    {
                        name: 'expiredAt',
                        type: 'timestamp',
                    },
                    {
                        name: 'consumedTimes',
                        type: 'int',
                        default: 0,
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'childId',
                        type: 'varchar',
                        generationStrategy: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'receiverId',
                        type: 'varchar',
                        generationStrategy: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys(this.tableName, [
            new TableForeignKey({
                columnNames: ['childId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'child',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['receiverId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'user',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
