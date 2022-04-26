import PropTypes from 'prop-types';

import { ButtonLoader } from './Button.styled';

export const Button = ({ onClickBtn }) => {
  return (
    <ButtonLoader type="button" onClick={onClickBtn}>
      Load more
    </ButtonLoader>
  );
};

Button.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};
