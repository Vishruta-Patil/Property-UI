
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const ImageOverlay = () => {
  return (
    <div className="relative h-full w-full">
      <video className="h-full w-full object-cover" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <FontAwesomeIcon icon={faPlayCircle} className="text-orange-500 text-6xl" />
      </div>
    </div>
  );
};

export default ImageOverlay;
