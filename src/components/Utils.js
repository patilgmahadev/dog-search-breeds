export const SORT_BY = {
  name: "name",
  height: "height",
  lifespan: "lifespan",
};

export const getSortedData = (sortBy, breeds) => {
  let sortedData = [];
  switch (sortBy) {
    case SORT_BY.height:
      sortedData = breeds.sort((a, b) => {
        const heightA = parseFloat(a.height.metric.split(" - ")?.[0]);
        const heightB = parseFloat(b.height.metric.split(" - ")?.[0]);
        return heightA - heightB;
      });
      break;
    case SORT_BY.lifespan:
      sortedData = breeds.sort((a, b) => {
        const lifespanA = parseFloat(
          a.life_span?.replaceAll(" ", "")?.split("-")?.[0]
        );
        const lifespanB = parseFloat(
          b.life_span?.replaceAll(" ", "")?.split("-")?.[0]
        );
        return lifespanA - lifespanB;
      });
      break;
    case SORT_BY.name:
    default:
      sortedData = breeds.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      break;
  }
  return sortedData;
};
