declare module '@apiverve/lovecalculator' {
  export interface lovecalculatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface lovecalculatorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class lovecalculatorWrapper {
    constructor(options: lovecalculatorOptions);

    execute(callback: (error: any, data: lovecalculatorResponse | null) => void): Promise<lovecalculatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: lovecalculatorResponse | null) => void): Promise<lovecalculatorResponse>;
    execute(query?: Record<string, any>): Promise<lovecalculatorResponse>;
  }
}
