// TODO: Import the Front component from the front_and_sidebar mfe
import {useMediaContext} from 'mediastore/contextHooks';
// TODO: Import the useMediaContext hook from the mediastore mfe

const Home = () => {
  // TODO: Use the useMediaContext hook to get the mediaItems
  const { mediaItems } = useMediaContext();
  console.log('Media Items in Home:', mediaItems);
  // TODO: Pass the mediaItems to the Front component
  return <div>Home</div>;
};

export default Home;
