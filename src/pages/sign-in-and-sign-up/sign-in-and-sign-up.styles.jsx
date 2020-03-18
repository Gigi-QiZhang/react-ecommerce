// import styled from 'styled-components';

// export const SignInAndSignUpContainer = styled.div`
//     margin: 0 auto;
//     max-width: 850px;
//     width: 90vw;
//     display: flex;
//     justify-content: space-between;
// `;

import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;