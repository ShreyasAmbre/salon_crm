// import { inject, Injectable, signal } from '@angular/core';
// import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
// import { ErrorModal, ErrorModalDefaultConfig } from '../components/error-modal/error-modal';

// @Injectable({
//   providedIn: 'root',
// })
// export class ErrorModalService {
//   #modalService = inject(NgbModal);

//   /**
//    * Shows an error modal with the provided message
//    * @param message Error message to display
//    * @param isTranslateKey Whether the message is a translation key, optional, default is true
//    * @returns Modal reference
//    */
//   showError(message: string, isTranslateKey = true): NgbModalRef {
//     const modalRef = this.#modalService.open(ErrorModal, ErrorModalDefaultConfig);
//     modalRef.componentInstance.errorMessage = signal(message);
//     modalRef.componentInstance.isMessageTranslateKey = signal(isTranslateKey);
//     return modalRef;
//   }

//   /**
//    * Shows an error modal with custom title, message and button text
//    * @param message Error message to display
//    * @param title Custom title for the modal
//    * @param buttonText Custom button text
//    * @param isTranslateKey Whether the message is a translation key
//    * @returns Modal reference
//    */
//   showCustomError(
//     message: string,
//     title?: string,
//     buttonText?: string,
//     isTranslateKey = true,
//   ): NgbModalRef {
//     const modalRef = this.#modalService.open(ErrorModal, ErrorModalDefaultConfig);

//     modalRef.componentInstance.errorMessage = signal(message);
//     modalRef.componentInstance.isMessageTranslateKey = signal(isTranslateKey);

//     if (title) {
//       modalRef.componentInstance.errorTitle = signal(title);
//     }

//     if (buttonText) {
//       modalRef.componentInstance.errorButtonText = signal(buttonText);
//     }

//     return modalRef;
//   }

//   /**
//    * Shows a default error message using translation keys
//    * @returns Modal reference
//    */
//   showDefaultError(): NgbModalRef {
//     return this.showError('defaultErrorMessage');
//   }

//   /**
//    * Shows an error from an HTTP error response
//    * @param error The error object from HTTP request
//    * @returns Modal reference
//    */
//   showHttpError(error: any): NgbModalRef {
//     if (error?.error?.message) {
//       return this.showError(error.error.message, false);
//     } else if (error?.message) {
//       return this.showError(error.message, false);
//     } else {
//       return this.showDefaultError();
//     }
//   }
// }
