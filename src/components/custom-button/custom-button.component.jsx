import React from 'react';

import { CustomButtonContainer } from './custom-button.style';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;

// import './custom-button.styles.scss';

// const CustomButton = ({ children, ...otherProps }) => {
    
//     console.log("children:",children);//children: Loginkkkkkk
//     console.log(otherProps); //{type: "submit"}
    
//     return (
//         <button className='custom-button' {...otherProps}>
//             {children}
//         </button>
//     )
// };


// const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
//     <button 
//         // className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
//         className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
//         {...otherProps}
//     >
//         {children}
//     </button>
// )