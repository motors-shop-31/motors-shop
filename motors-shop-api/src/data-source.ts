import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Image } from "./entities/image.entity";
import { Product } from "./entities/product.entity";
import { Comments } from "./entities/comments.entity";

import { DataSource } from "typeorm";

import { initialMigration1677697118743 } from "./migrations/1677697118743-initialMigration";
import { create1677697159190 } from "./migrations/1677697159190-create";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: [User, Address, Comments, Image, Product],
      }
    : {
        type: "postgres",
        host: "localhost",
        port: 5432,

        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PWD,
        database: process.env.POSTGRES_DB,

        synchronize: false,
        logging: true,

        entities: [User, Address, Comments, Image, Product],
        migrations: [initialMigration1677697118743, create1677697159190],
      }
);

export default AppDataSource;
