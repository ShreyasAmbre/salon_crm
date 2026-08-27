import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export const ConfirmModalDefaultConfig: Readonly<NgbModalOptions> = {
  backdrop: 'static',
  keyboard: false,
  centered: true,
  size: 'md',
  modalDialogClass: 'modal-rounded',
};

export type ConfirmMessageParamKey = '_val';
export type ConfirmMessageParams = Record<ConfirmMessageParamKey, string | number>;

@Component({
  selector: 'shared-confirm-modal',
  imports: [TranslocoModule],
  templateUrl: './confirm-modal.html',
  styleUrl: './confirm-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModal {
  activeModal = inject(NgbActiveModal);
  title = input('areYouSure');
  message = input('areYouSureMessage');
  messageParams = input<ConfirmMessageParams | undefined>(undefined);
  messageType = input<'danger' | 'success'>('success');
  confirmButtonText = input('submit');
  cancelButtonText = input('cancel');
}
