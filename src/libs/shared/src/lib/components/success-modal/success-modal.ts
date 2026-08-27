import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export const SuccessModalDefaultConfig: Readonly<NgbModalOptions> = {
  backdrop: 'static',
  keyboard: false,
  centered: true,
  size: 'md',
  modalDialogClass: 'modal-rounded',
};

@Component({
  selector: 'shared-success-modal',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './success-modal.html',
  styleUrl: './success-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessModal {
  activeModal = inject(NgbActiveModal);
  successTitle = input<string>('defaultSuccessTitle');
  successMessage = input<string>('');
  successButtonText = input<string>('defaultSuccessButtonText');
  isMessageTranslateKey = input<boolean>(true);
  translateParams = input<Record<string, string | number>>({});

  close() {
    this.activeModal.close();
  }
}
