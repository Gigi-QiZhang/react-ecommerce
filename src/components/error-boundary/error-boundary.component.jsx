import React from 'react';
 
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';
 
class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false
        }
    }
    // static lifecycle method
    static getDerivedStateFromError(error) {
        // proc
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/oCkEbrA.png'/>
                    <ErrorImageText>Sorry this page is broken. We will fix it.</ErrorImageText>
                </ErrorImageOverlay>
            );
            // <div>Something went wrong</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;