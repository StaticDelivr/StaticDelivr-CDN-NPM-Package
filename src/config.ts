let globalConfig = {
    baseURL: '',
  };
  
  export const config = {
    set(config: { baseURL: string }) {
      globalConfig = { ...globalConfig, ...config };
    },
    get() {
      return globalConfig;
    },
  };
