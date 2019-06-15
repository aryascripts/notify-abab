class LocalStorage {

  // get(item: string) {
  //   return JSON.parse(
  //     localStorage.getItem(item));
  // }

  set(id: string, object: any) {
    localStorage.setItem(id, JSON.stringify(object));
  }

  delete(id: string) {
    localStorage.removeItem(id);
  }

}

export default new LocalStorage();
