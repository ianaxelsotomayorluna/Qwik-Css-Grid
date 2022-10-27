// ---Dependencies
import { component$ } from "@builder.io/qwik";

/**
 * Home Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const ElementAlignment = component$(() => {
  return (
    <div>
      <h1>Concepto de diseño</h1>
      <hr />
      <div class="completo">
        <div>100%</div>
      </div>
       <div class="mitad">
         <div>70%</div>
         <div>500%</div>
         <div>40%</div>
       </div>
       <div class="tercia">
        <div>33.3%</div>
        <div>33.3%</div>
        <div>33.3%</div>
       </div>
       <div class="cuartos">
       <div>25%</div>
       <div>25%</div>
       <div>25%</div>
       <div>25%</div>
       <div>25%</div>
       </div>
     </div> 
  );
});