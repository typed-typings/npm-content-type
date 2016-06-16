export interface ContentType {
  type: string;
  parameters: {
    [key: string]: string;
  };
}

export interface Req {
  getHeader? (key: string): string;
  headers?: {
    [key: string]: string;
  };
}

export function parse (str: string | Req): ContentType;

export function format (obj: ContentType): string;
