import PropTypes from 'prop-types';

export const GifItem = ({ image: { title, url } }) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  image: PropTypes.object,
}