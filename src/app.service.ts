import mysqldump from 'mysqldump';

import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  get DB_connection() {
    return {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: Number.parseInt(process.env.DB_PORT),
    };
  }

  private readonly logger = new Logger('BACKUP');
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  backupDB() {
    Promise.all([
      mysqldump({
        connection: this.DB_connection,
        dumpToFile: 'backup/struct.sql',
        dump: { data: false },
      }),
      mysqldump({
        connection: this.DB_connection,
        dumpToFile: 'backup/data.sql',
        dump: {
          schema: false,
          trigger: false,
          excludeTables: false,
        },
      }),
    ])
      .then(() => this.logger.log(`BACKUP DONE, ${new Date()}`))
      .catch((e) => this.logger.error(e));
  }
}
