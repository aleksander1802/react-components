import { render } from '@testing-library/react';

import { CardsForm } from './CardsForm';

describe('CardsForm component render', () => {
  it('should render the form correctly', () => {
    render(<CardsForm data={[]} />);
  });
});
