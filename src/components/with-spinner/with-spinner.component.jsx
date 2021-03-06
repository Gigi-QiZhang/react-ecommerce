import React from 'react';
// High Order Component
// import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';
import Spinner from '../spinner/spinner.component';


const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
   
};
// const WithSpinner = WrappedComponent => {
//     const Spinner = ({ isLoading, ...otherProps }) => {
//         return isLoading ? (
//             <SpinnerOverlay>
//                 <SpinnerContainer />
//             </SpinnerOverlay>
//         ) : (
//             <WrappedComponent {...otherProps} />
//         );
//     };
//     return Spinner;
// };

export default WithSpinner; // High Order Component
