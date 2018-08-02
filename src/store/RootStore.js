import {ContactStore} from './ContactStore'
import ContactService from '../services/ContactService'

class RootStore {

    constructor() {
      this.contactStore = new ContactStore(this, ContactService)
    }

}

export const store = new RootStore()