import GridGenerator from '../common/components/GridGenerator';

import StyledGameLanding from './index.styles';

function GameLandingPage() {
  const grid: GridGenerator['grid'] = [
    {
      cols: [{ val: 'S', key: 'S' }, { val: 'U', key: 'U' }, {}],
      key: 'COL_1',
    },
    {
      cols: [{}, { val: 'D', key: 'D' }, { val: 'O', key: 'O' }],
      key: 'COL_2',
    },
    {
      cols: [{ val: 'K', key: 'K' }, {}, { val: 'U', key: 'U' }],
      key: 'COL_2',
    },
  ];
  return (
    <StyledGameLanding>
      <GridGenerator grid={grid} />
    </StyledGameLanding>
  );
}

export default GameLandingPage;
