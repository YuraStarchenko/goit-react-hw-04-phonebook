import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { List, Item, Btn } from './ContactList.styled';

export const ContactList = ({ contacts, onRemove }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactListItem contact={contact} />
          <Btn onClick={() => onRemove(contact.id)}>delete</Btn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
