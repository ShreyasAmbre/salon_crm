import { signal, WritableSignal } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AppInjector } from '../../utils/app-injector';
import { ConfirmMessageParams, ConfirmModal } from './confirm-modal';

const defaultOptions = {
  title: signal('areYouSure'),
  message: signal('areYouSureMessage'),
  messageType: signal<'danger' | 'success'>('success'),
  confirmButtonText: signal('submit'),
  cancelButtonText: signal('cancel'),
  modalOptions: {
    centered: true,
    size: 'md',
    backdrop: 'static',
    keyboard: false,
    modalDialogClass: 'modal-rounded',
  } as NgbModalOptions,
};

export type ConfirmModalOptions = Partial<typeof defaultOptions> & {
  messageParams?: (...args: any[]) => WritableSignal<ConfirmMessageParams | null>;
};

export function ConfirmModalAction(options: ConfirmModalOptions = defaultOptions) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const modalRef = AppInjector.getInjector()
        .get(NgbModal)
        ?.open(ConfirmModal, {
          ...{ ...defaultOptions.modalOptions, ...options.modalOptions },
        });
      modalRef.componentInstance.title = options.title ?? defaultOptions.title;
      modalRef.componentInstance.message = options.message ?? defaultOptions.message;
      if (options.messageParams) {
        modalRef.componentInstance.messageParams = options.messageParams(...args);
      }
      modalRef.componentInstance.messageType = options.messageType ?? defaultOptions.messageType;
      modalRef.componentInstance.confirmButtonText =
        options.confirmButtonText ?? defaultOptions.confirmButtonText;
      modalRef.componentInstance.cancelButtonText =
        options.cancelButtonText ?? defaultOptions.cancelButtonText;
      modalRef.result.then((reason) => {
        if (reason === 'submit') {
          // console.log('submit');
          originalMethod.apply(this, args);
        }

        if (reason === 'cancel') {
          // Handle cancel logic here
        }
      });
    };

    return descriptor;
  };
}
