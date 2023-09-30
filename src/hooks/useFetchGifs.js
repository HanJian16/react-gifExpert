import { useEffect, useState } from 'react';

import PropTypes from 'prop-types'

import { getGifs } from '../helpers/GetGifs';

const useFetchGifs =(category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();

        //Forma de hacerlo sin async/await pues el useEffect no puese ser async ya que eso retorna una promesa y el useEffect siempre debe retornar una función.
        // getGifs(category)
        //   .then(newImages => setImages(newImages));
    }, []);


    return {
        images,
        isLoading,
    }
}

useFetchGifs.propTypes = {
    category: PropTypes.string,
}

export default useFetchGifs