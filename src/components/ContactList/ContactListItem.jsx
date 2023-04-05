import PropTypes from 'prop-types';
import { Text } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { name, number } }) => {
  return (
    <Text>
      {name}: {number}
    </Text>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
