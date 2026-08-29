import { Component, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex min-h-[40vh] flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 dark:bg-red-500/20">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="mb-2 font-display text-2xl font-bold dark:text-white text-[var(--text-primary)]">
            Something went wrong
          </h2>
          <p className="mb-6 max-w-md text-sm leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
            An unexpected error occurred. You can try refreshing the page or navigating to a different section.
          </p>
          <div className="flex gap-3">
            <button
              onClick={this.handleReset}
              className="rounded-full bg-brand-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Try Again
            </button>
            <a
              href="/"
              className="rounded-full dark:border-white/15 border-black/[0.1] dark:bg-white/5 bg-white/80 px-6 py-2.5 text-sm font-semibold dark:text-white text-[var(--text-primary)] backdrop-blur transition-all hover:-translate-y-0.5"
            >
              Go Home
            </a>
          </div>
          {import.meta.env.DEV && this.state.error && (
            <pre className="mt-8 max-w-lg overflow-auto rounded-xl dark:bg-white/[0.04] bg-black/[0.04] p-4 text-left text-xs dark:text-slate-500 text-slate-400">
              {this.state.error.message}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
