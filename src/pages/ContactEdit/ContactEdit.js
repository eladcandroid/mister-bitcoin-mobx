import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

import ContactService from '../../services/ContactService'
import { Input } from '../../components/Input/Input'

import './ContactEdit.css'
import imgAvatar from '../../assets/img_avatar.png'

const Header = ({contact, onDeleteContact}) => {
  const backUrl = contact._id ? `/contacts/${contact._id}` : `/contacts`

  return (
    <header className="contact-edit-header">
      <Link to={backUrl}>Back</Link>
      {contact._id && <Link to='/' onClick={onDeleteContact}>Delete</Link>}
    </header>
  )
}

class ContactEdit  extends Component {
  constructor(props) {
    super(props)
    
    this.state =  { 
      contact: ContactService.getEmptyContact() 
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id; // params -> from url
    if (!id) return
    
    this.fetchContact(id);
  }

  fetchContact(id) {
    ContactService.getContactById(id)
      .then( contact => {
        this.setState( {contact})
      })
  }

  onInputChange = (field) => {
    const contact = {...this.state.contact, ...field}
    this.setState({contact})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const contact = this.state.contact
    ContactService.saveContact(contact).then ( () => {
      this.setState({contact: ContactService.getEmptyContact() })
      this.props.history.push(`/contacts/${contact._id}`)
    })    
  }

  onDeleteContact = () => {
    ContactService.deleteContact(this.state.contact._id)
      .then( () => this.props.history.push(`/contacts`))
  }

  renderField(name, title, value) {
    return (
      <Input field={{name, title, value}} onInput={this.onInputChange} />
    )
  }

  render() {
    const {contact} = this.state
    const avatar = contact.picture || imgAvatar

    return (
      <div className="contact-edit">
        <Header contact={contact} onDeleteContact={this.onDeleteContact}/>
        <div className="contact-edit-body">
          <img src={avatar} alt="Person" width="96" height="96" />
          
          <form onSubmit={this.onFormSubmit} className="contact-edit-form">
            
            <div className="form-field">
              {this.renderField('name', 'Name', contact.name)}
            </div>

            <div className="form-field">
              {this.renderField('phone', 'Phone', contact.phone)}
            </div>

            <div className="form-field">
              {this.renderField('email', 'Email', contact.email)}
            </div>
            
            <div className="form-actions-container">
              <button type="submit">Save</button>
            </div>
            
          </form>
        </div>  
      </div>
    )
  }
}

export default ContactEdit;
