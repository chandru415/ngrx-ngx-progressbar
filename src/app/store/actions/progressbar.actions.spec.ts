import * as fromProgressbar from './progressbar.actions';

describe('showProgressbars', () => {
  it('should return an action', () => {
    expect(fromProgressbar.startProgressbars().type).toBe('[Progressbar] Show Progressbars');
  });
});
