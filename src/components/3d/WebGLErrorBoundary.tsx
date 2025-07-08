import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class WebGLErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if it's a WebGL related error
    const isWebGLError = error.message.includes('WebGL') || 
                        error.message.includes('context') ||
                        error.stack?.includes('WebGLRenderer');
    
    return { hasError: isWebGLError, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.warn('WebGL Error caught by boundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-lg">
          <div className="text-center p-8">
            <div className="text-4xl mb-4">🏔️</div>
            <h3 className="text-lg font-semibold mb-2">Alpine View</h3>
            <p className="text-muted-foreground text-sm">
              Experience the beauty of Mont-Fort
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}