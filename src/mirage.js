import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';
import { paginateData } from './helpers';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      product: Model,
    },

    factories: {
      product: Factory.extend({
        code: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(10, 1000),
        sales: faker.datatype.number({ max: 10 }),
        stock: faker.datatype.number({ min: 1, max: 99 }),
      }),
    },

    seeds(server) {
      server.createList('product', 40);
    },

    routes() {
      this.namespace = 'api';
      this.get('products', (schema, req) => {
        const { page, perPage } = req.queryParams;
        return paginateData(schema.all('product').models, +page, +perPage);
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
