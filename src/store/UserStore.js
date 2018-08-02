import { observable, action, computed  } from 'mobx';

export class ContactStore {
    @observable user = null;
    @observable isLoading = true;

    constructor(rootStore) {
        this.rootStore = rootStore
    }
    

}