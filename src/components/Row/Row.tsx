// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
import { CSSSAtributes } from 'src/declarations';
import { RowStyles } from './useStyles';
// ---UI Dependencies
// ---Custom Hooks
// ---Redux
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images

interface Props {
  hAlign?: 'center' | 'start' | 'end';
  vAlign?: 'top' | 'middle' | 'bottom';
  hSpace?: number;
  vSpace?: number;
  debug?: boolean;
}
/**
 * SimpleComp Component: Do something
 * @returns {ReactElement}
 */
export const Row = component$((props: Props) => {
  // -----------------------CONSTS, HOOKS, STATES
  const { hSpace, vSpace, debug } = props
  const styleData = RowStyles({ hSpace: hSpace ?? 1, vSpace: vSpace ?? 1, debug });
  const style: CSSSAtributes = {
    display: 'block',
    textAlign: props?.hAlign || 'start',
    verticalAlign: props?.vAlign || 'bottom'
  }

  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
    <style>{styleData?.styles}</style>
    <div className={styleData.parentClassName} style={style}>
      <Slot />
    </div>
    </>
  );
});
