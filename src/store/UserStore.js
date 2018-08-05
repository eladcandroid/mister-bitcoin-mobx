import { observable, action, computed  } from 'mobx';
export class UserStore {
    @observable user = null;
    @observable isLoading = true;
    @observable isProcessing = true;

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

    @action
    transferCoins(contactId, contactName, amount) {
        this.isProcessing = true
        this.user.moves.unshift({toId: contactId, to: contactName, amount, at: Date.now()})
        this.apiService.updateUser(this.user)
        this.isProcessing = false
    }

    @computed
    get isUserExist() {
        return !!this.user
    }

    @computed
    get movesToCurrContact() {
        const selectedContactId = this.rootStore.contactStore.selectedContact._id
        return this.user.moves.filter(move => move.toId === selectedContactId)
    }

    @computed
    get lastMoves() {
        return this.user.moves.slice(0, 3)
    }

   
}