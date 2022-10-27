// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Col } from 'src/components/Col/Col';
import { Row } from 'src/components/Row/Row';

/**
 * NestedUsage Component: Basic implementation of the grid system with "span"
 * @returns
 */
export const NestedUsage = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <>
      <h1>Nested</h1>
      <hr />
      <Row debug>
        <Col span={40}>40%</Col>
        <Col span={60}>
          <Row debug hSpace={1} vSpace={1}>
            <Col background="#0059cd" span={70}>
              70%
            </Col>
            <Col background="#0059cd" span={20}>
              20%
            </Col>
            <Col background="#0059cd" span={10}>
              10%
            </Col>
            <Col background="#0059cd" span={25}>
              25%
            </Col>
            <Col background="#0059cd" span={25}>
              25%
            </Col>
            <Col background="#0059cd" span={25}>
              25%
            </Col>
            <Col background="#0059cd" span={25}>
              25%
            </Col>
            <Col background="#0059cd" span={40}>
              40%
            </Col>
            <Col background="#0059cd" span={60}>
              60%
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
});
