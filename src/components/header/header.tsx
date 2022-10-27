// ---Dependencies
import { component$, useStylesScoped$ } from '@builder.io/qwik';
// ---CSS
import styles from './header.css?inline';

export default component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useStylesScoped$(styles);
  return (
    <header>
      <a href="/">
        <img src="/forge-sm-web.png" alt="forge" width={120} />
      </a>
      <ul>
        <li>
          <a href="/dummyRoute"> Dummy Route</a>
        </li>
        <li>
          <a href="/alignmentRoute">alignment</a>
        </li>
        <li>
          <a href="/autoFillRoute">Auto Fill</a>
        </li>
        <li>
          <a href="/positionsRoute">Positions</a>
          <a href="/botzGrid">botzGrid</a>
        </li>
      </ul>
    </header>
  );
});
