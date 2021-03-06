import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Atualiza o state para que a próxima renderização mostre a UI alternativa.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Você também pode registrar o erro em um serviço de relatórios de erro
      
    }
  
    render() {
      if (this.state.hasError) {
        // Você pode renderizar qualquer UI alternativa
        return <h1>Algo deu errado, tente novamente.</h1>;
      }
  
      return this.props.children; 
    }
  }