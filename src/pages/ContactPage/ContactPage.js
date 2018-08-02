import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactList from '../../components/ContactList/ContactList'
import ContactFilter from '../../components/ContactFilter/ContactFilter'
import { inject, observer } from 'mobx-react';
import './ContactPage.css'

@inject('store')
@observer
class ContactPage extends Component {
  state = { 
    contacts: []
  };

  contactSearch = (term) => {
    this.props.store.contactStore.fetchContacts(term)
  }
  
  render() {
    const contactStore = this.props.store.contactStore

    return (
      <div className="contacts-page">
        <div className="search-container">
          <ContactFilter onFilter={this.contactSearch} />
        </div>
        <div className="contacts-container">
            <ContactList contacts={contactStore.contacts} />
        </div>
        <div className="action-container">
          <Link to={'/contacts/edit/'}>+</Link>
        </div>
      </div>
    );
  }
}

export default ContactPage;
