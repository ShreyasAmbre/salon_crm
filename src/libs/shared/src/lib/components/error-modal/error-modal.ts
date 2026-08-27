import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export const ErrorModalDefaultConfig: Readonly<NgbModalOptions> = {
  backdrop: 'static',
  keyboard: false,
  centered: true,
  size: 'md',
  modalDialogClass: 'modal-rounded',
};

@Component({
  selector: 'shared-error-modal',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './error-modal.html',
  styleUrl: './error-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorModal {
  activeModal = inject(NgbActiveModal);
  errorTitle = input<string>('defaultErrorTitle');
  errorMessage = input<string>('defaultErrorMessage');
  errorButtonText = input<string>('defaultErrorButtonText');
  isMessageTranslateKey = input<boolean>(true);

  close() {
    this.activeModal.close();
  }
}
