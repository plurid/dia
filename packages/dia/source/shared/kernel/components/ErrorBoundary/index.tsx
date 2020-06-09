import React from 'react';



export interface ErrorBoundaryProperties {
    Corrective?: React.FC<any>;
}

export interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProperties, ErrorBoundaryState> {
    public state: ErrorBoundaryState;

    constructor(
        properties: ErrorBoundaryProperties,
    ) {
        super(properties);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(
        error: any,
    ) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
        };
    }

    componentDidCatch(
        error: any,
        errorInfo: any,
    ) {
    }

    render() {
        if (this.state.hasError) {
            const {
                Corrective,
            } = this.props;

            if (Corrective) {
                return (
                    <Corrective />
                );
            }

            return (
                <></>
            );
        }

        return this.props.children;
    }
}


export default ErrorBoundary;
