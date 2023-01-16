export const paginateData = (data: any, page = 1, perPage = 5) => {
  const lastPage = Math.ceil(data.length / perPage);

  if (page > lastPage) {
    page = lastPage;
  }

  const start = (page - 1) * perPage;

  const end = start + perPage;

  const dataSliced = data.slice(start, end);

  const previousPage =
    page - 1 >= 1 ? `?page=${page - 1}&perPage=${perPage}` : null;
  const nextPage =
    end < data.length ? `?page=${page + 1}&perPage=${perPage}` : null;

  return {
    page,
    perPage: perPage,
    previousPage: previousPage,
    nextPage: nextPage,
    lastPage: lastPage,
    count: data.length,
    content: dataSliced,
  };
};
