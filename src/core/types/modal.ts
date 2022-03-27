export interface ModalProps {
  show?: boolean;
  title: string;
  description?: string;
  type: ModalTypes;
  action?: () => void;
}
export enum ModalTypes {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
