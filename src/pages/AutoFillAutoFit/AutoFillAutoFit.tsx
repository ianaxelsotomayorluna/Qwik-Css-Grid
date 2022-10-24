// ---Dependencies
import { component$ } from "@builder.io/qwik";

/**
 * Home Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const AutoFillAutoFit = component$(() => {
  return (
    <div>
      <div class="texto">
        <p>Auto Fill & Auto Fit</p>
      </div>
      <div class= "Autofill">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        
      </div>
    </div> 
  );
});