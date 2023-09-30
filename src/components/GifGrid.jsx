import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
        <h4>{ category }</h4>
        <div className='card-grid'>
        {
          isLoading && ( <div>Cargando...</div> )
        }
          { 
            images.map( image => (
              <GifItem 
                key={image.id} 
                image={image}
                //Puedes hacerle un spreed y enviar todas las variables como props es una sintaxys muy usada.
                //{ ...image }
              />
            )) 
          }
        </div>
    </>
  )
};

GifGrid.propTypes = {
    category: PropTypes.string,
};
