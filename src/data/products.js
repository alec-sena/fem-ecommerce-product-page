import image1 from '../images/image-product-1.jpg';
import image2 from '../images/image-product-2.jpg';
import image3 from '../images/image-product-3.jpg';
import image4 from '../images/image-product-4.jpg';
import thumbnail1 from '../images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../images/image-product-4-thumbnail.jpg';

const products = {
    fallLimitedEditionSneakers: {
        id: 'fallLimitedEditionSneakers',
        name: 'Fall Limited Edition Sneakers',
        price: 250.00,
        discount: .5,
        images: [image1, image2, image3, image4],
        thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
    }
}

export default products;