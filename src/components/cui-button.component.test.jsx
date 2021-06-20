import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CuiButton } from './cui-button.component';

describe('CuiButton Component', () => {
  it('is truthy', () => {
    expect(CuiButton).toBeTruthy();
  });

  describe('Events', () => {
    it('Click', async () => {
      const clickEvent = jest.fn();

      const { getByText } = render(
        <CuiButton onClick={clickEvent}>my button</CuiButton>
      );

      fireEvent.click(getByText('my button'))

      expect(clickEvent).toBeCalled();
    });

    it('Blur', async () => {
      const blurEvent = jest.fn();

      const { getByText } = render(
        <CuiButton onBlur={blurEvent}>my button</CuiButton>
      );

      fireEvent.blur(getByText('my button'));

      expect(blurEvent).toBeCalled();
    });

    it('Focus', async () => {
      const focusEvent = jest.fn();

      const { getByText } = render(
        <CuiButton onFocus={focusEvent}>my button</CuiButton>
      );

      fireEvent.focus(getByText('my button'));

      expect(focusEvent).toBeCalled();
    });
  });
});
