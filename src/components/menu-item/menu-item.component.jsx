import React from 'react';
import { withRouter } from 'react-router-dom';
// high order component, a function takes a component as an argument, returns a modified component (wrapper?)
// export default withRouter(MenuItem); 
// to deal with 'history', so that to avoid props tunneling

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';
  
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer 
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer 
            // className='background-image'
            imageUrl={imageUrl}
        />

        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer> 
);

export default withRouter(MenuItem);

// import './menu-item.styles.scss';
// const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
//     /* <div 
//         style={{
//             backgroundImage: `url(${imageUrl})`
//         }}
//         className={`${size} menu-item`} />
//     > */
//     <div 
//         className={`${size} menu-item`} 
//         onClick={() => history.push(`${match.url}${linkUrl}`)}
//     >
//         <div 
//             className='background-image'
//             style={{
//                 backgroundImage: `url(${imageUrl})`
//             }}
//         />

//         <div className='content'>
//             <h1 className='title'>{ title.toUpperCase() }</h1>
//             <span className='subtitle'>SHOP NOW</span>
//         </div>
//     </div> 
// );