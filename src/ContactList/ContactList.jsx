import React from 'react';
import PropTypes from 'prop-types';

function ContactList(props) {
  const { contacts, del } = props;

  const deleteId = (id) => {
    del(id);
  };

  const createList = () => {
    return contacts.map((contact) => (
      <li key={contact.id}>
        {`${contact.name}: ${contact.number}`}
        <button data-id={contact.id} onClick={() => deleteId(contact.id)}>
          Delete
        </button>
      </li>
    ));
  };

  return <ul>{createList()}</ul>;
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  del: PropTypes.func.isRequired,
};

export default ContactList;
