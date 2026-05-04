import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical Module Failure:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <div className="hitech-border-glow"></div>
          <div className={styles.errorHeader}>
            <AlertTriangle size={24} color="#ff4d4d" />
            <span className={styles.errorTitle}>SYSTEM_CRITICAL_FAILURE</span>
          </div>
          <div className={styles.errorBody}>
            <p className={styles.errorMessage}>
              Ocorreu uma falha na renderização deste módulo. 
              As dependências podem estar corrompidas ou inacessíveis.
            </p>
            <button 
              className={styles.retryBtn}
              onClick={() => window.location.reload()}
            >
              <RefreshCw size={16} />
              Tentar Restaurar Sistema
            </button>
          </div>
          <div className={styles.errorCode}>
            STATUS_CODE: 0x505 // COMPONENT_ID: {this.props.componentName || 'UNKNOWN'}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
