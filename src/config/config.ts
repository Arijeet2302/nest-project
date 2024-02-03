import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function postgresdb(): TypeOrmModuleOptions {
  const config: any = {
    type: 'postgres',
    host: 'ep-summer-dawn-88753104-pooler.us-east-1.postgres.vercel-storage.com',
    port: 5432,
    username: 'default',
    password: 'L2qMPfOl1uvC',
    database: 'verceldb',
    entities: ['dist/**/entities/*.entity{.ts,.js}'],
    synchronize: true,
    ssl: true,
  };

  return config;
}
