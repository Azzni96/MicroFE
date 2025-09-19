import {useMediaContext} from 'mediastore/contextHooks';
import Front from 'front_and_sidebar/Front';

const Home = () => {
 const { mediaItems } = useMediaContext();
  console.log('Media Items in Home:', mediaItems);
  return <div>{<Front mediaItems={mediaItems} />}</div> 



};

export default Home;
