// BaseFatory

class BaseFactory {
  generateList(count, attrs = {}) {
    const list = [];
    let numberOfItemsToCreate = count;

    while (numberOfItemsToCreate) {
      list.push(this.generate(attrs));
      numberOfItemsToCreate--;
    }
    return list;
  }
}

export default BaseFactory;
