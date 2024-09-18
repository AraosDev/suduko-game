import styled from 'styled-components';

const StyledGameLanding = styled.div`
  width: '100%';
  height: 100vh;
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  table,
  tr,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  td {
    width: 100px;
    height: 100px;
    vertical-align: middle;
    text-align: center;
  }
`;

export default StyledGameLanding;
