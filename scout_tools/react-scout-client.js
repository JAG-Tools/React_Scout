class Client {
  constructor() {
    this.appState = null;
  }
  
  add(state) {
    this.appState = state;
  }


}

export default new Client();