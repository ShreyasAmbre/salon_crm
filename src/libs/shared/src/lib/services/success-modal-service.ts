// import { inject, Injectable, signal } from '@angular/core';
// import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
// import { SuccessModal, SuccessModalDefaultConfig } from '../components/success-modal/success-modal';

// @Injectable({
//   providedIn: 'root',
// })
// export class SuccessModalService {
//   #modalService = inject(NgbModal);

//   /**
//    * Shows a success modal with the provided message
//    * @param message Success message to display
//    * @param isTranslateKey Whether the message is a translation key
//    * @returns Modal reference
//    */
//   showSuccess(
//     message: string,
//     isTranslateKey = true,
//     params?: Record<string, string | number>,
//   ): NgbModalRef {
//     const modalRef = this.#modalService.open(SuccessModal, SuccessModalDefaultConfig);
//     modalRef.componentInstance.successMessage = signal(message);
//     modalRef.componentInstance.isMessageTranslateKey = signal(isTranslateKey);
//     modalRef.componentInstance.translateParams = signal(params);
//     return modalRef;
//   }

//   /**
//    * Shows a success modal with custom title, message and button text
//    * @param message Success message to display
//    * @param title Custom title for the modal
//    * @param buttonText Custom button text
//    * @param isTranslateKey Whether the message is a translation key
//    * @returns Modal reference
//    */
//   showCustomSuccess(
//     message: string,
//     title?: string,
//     buttonText?: string,
//     isTranslateKey = true,
//   ): NgbModalRef {
//     const modalRef = this.#modalService.open(SuccessModal, SuccessModalDefaultConfig);

//     modalRef.componentInstance.successMessage = signal(message);
//     modalRef.componentInstance.isMessageTranslateKey = signal(isTranslateKey);

//     if (title) {
//       modalRef.componentInstance.successTitle = signal(title);
//     }

//     if (buttonText) {
//       modalRef.componentInstance.successButtonText = signal(buttonText);
//     }

//     return modalRef;
//   }

//   showDefaultSuccess(): NgbModalRef {
//     return this.showSuccess('');
//   }
// }
