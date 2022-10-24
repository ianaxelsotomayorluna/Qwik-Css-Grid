// ---Dependencies
import { component$ } from "@builder.io/qwik";

/**
 * Home Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const Positions = component$(() => {
  return (
    <div>
      <h1>Positions</h1>
      <div class="Positions">
        <div class="footer">50%</div>
        <div class="sidebar">25%</div>
        <div class="content">75%</div>
        <div class="navbar">100%</div>
        <div class="nothing">25%</div>
        <div class="nothing2">25%</div>
      </div>
     </div> 
  );
});