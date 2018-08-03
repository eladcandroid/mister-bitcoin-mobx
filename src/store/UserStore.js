import { observable, action, computed  } from 'mobx';
export class UserStore {
    @observable user = null;
    @observable isLoading = true;

    constructor(rootStore, apiService) {
        this.rootStore = rootStore
        this.apiService = apiService

        this.user = apiService.loadUser()
    }
    
    @action
    signup(name) {
        this.isLoading = true
        this.user = this.apiService.signup(name)
        this.isLoading = false
    }

    @computed
    get isUserExist() {
        return !!this.user
    }
}