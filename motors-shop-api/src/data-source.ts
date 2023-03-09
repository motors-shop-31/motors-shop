import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Image } from "./entities/image.entity";
import { Product } from "./entities/product.entity";
import { Comments } from "./entities/comments.entity";

import { DataSource } from "typeorm";
import { initialMigration1678097729105 } from "./migrations/1678097729105-initialMigration";
import { startingTable1678125352756 } from "./migrations/1678125352756-startingTable";
import { dataUpdateComments1678296493310 } from "./migrations/1678296493310-dataUpdateComments";

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
        migrations: [
          initialMigration1678097729105,
          startingTable1678125352756,
          dataUpdateComments1678296493310,
        ],
      }
);

export default AppDataSource;
