// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { BasicUsage } from './BasicUsage/BasicUsage';
import { MassiveElementsUsage } from './MassiveElementsUsage/MassiveElementsUsage';
import { NestedUsage } from './NestedUsage/NestedUsage';
import { ResponsiveUsage } from './ResponsiveUsage/ResponsiveUsage';

/**
 * BotzGrid Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const BotzGrid = component$(() => {
  
  return (
    <div>
      <BasicUsage />
      <br />
      <ResponsiveUsage />
      <br />
      <NestedUsage />
      <br />
      <MassiveElementsUsage />
    </div>
  );
});
