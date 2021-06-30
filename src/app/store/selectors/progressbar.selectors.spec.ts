import * as fromProgressbar from '../reducers/progressbar.reducer';
import { selectProgressbarState } from './progressbar.selectors';

describe('Progressbar Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProgressbarState({
      [fromProgressbar.progressbarFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
