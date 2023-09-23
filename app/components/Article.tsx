import NavContext from '../util/NavContext';
import Container from './Container';

export default function Article() {
  return (
    <article className="flex md:w-1/2 justify-center mx-10 items-center bg-white h-full">
      <NavContext>
        <Container />
      </NavContext>
    </article>
  );
}
