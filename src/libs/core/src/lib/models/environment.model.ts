export interface Environment {
  production: boolean;
  envcode: 'local' | 'development' | 'staging' | 'production';
  baseUrl: string;
}
