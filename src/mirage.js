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
        code() {
          return faker.datatype.uuid();
        },
        name() {
          return faker.commerce.product();
        },
        price() {
          return faker.commerce.price(10, 1000);
        },
        sales() {
          return faker.datatype.number({ max: 10 });
        },
        stock() {
          return faker.datatype.number({ min: 1, max: 99 });
        },
      }),
    },

    seeds(server) {
      server.createList('product', 40);
    },

    routes() {
      this.namespace = 'api';
      this.get('products', async (schema, req) => {
        const { page, perPage, search } = req.queryParams;

        if (search) {
          const arr = await schema.products
            .all()
            .models.map(item => item.attrs);
          const filter = arr.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()),
          );
          return filter;
        }

        return paginateData(
          await schema.products.all().models,
          +page,
          +perPage,
        );
      });

      this.post('products', async (schema, req) => {
        const data = JSON.parse(req.requestBody);
        return {
          product: await schema.products.create({
            ...data,
            code: faker.datatype.uuid(),
            sales: 0,
          }),
        };
      });

      this.get('mostsaled', async (schema, req) => {
        const { page, perPage } = req.queryParams;
        const arr = await schema.products.all().models.map(item => item.attrs);
        const sortedArray = arr.sort((a, b) => a.sales - b.sales).reverse();
        return paginateData(sortedArray, +page, +perPage);
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
