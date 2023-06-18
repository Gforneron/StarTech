import React from 'react';
import PropTypes from 'prop-types';
import './SmallCard.css';

function SmallCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card ${props.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`title text-uppercase`}>{props.title}</div>
              <div className="h5 mb-0">{props.cuantity}</div>
            </div>
            <div className="col-auto">
              <i className={`fas ${props.icon} fa-2x`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
  title: 'No Title',
  color: 'success',
  cuantity: 'No cuantity',
  icon: 'fa-clipboard-list'
};

/* PROPTYPES */

SmallCard.propTypes = {
  attributes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cuantity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired
};

export default SmallCard;
