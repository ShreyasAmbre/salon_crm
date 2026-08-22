import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@jsverse/transloco';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '../../../services';

@Component({
  selector: 'shared-actions-dropdown-cell',
  imports: [CommonModule, TranslocoModule, FontAwesomeModule, NgbDropdownModule],
  templateUrl: './actions-dropdown-cell.html',
  styleUrl: './actions-dropdown-cell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsDropdownCell {
  #languageService = inject(LanguageService);

  isRtl = this.#languageService.isRtl;
  row = input.required<any>();

  isViewVisible = input<boolean>(false);
  isEditVisible = input<boolean>(false);
  isDeleteVisible = input<boolean>(false);
  isResendVisible = input<boolean>(false);
  isCopyVisible = input<boolean>(false);
  isHistoryVisible = input<boolean>(false);
  isListVisible = input<boolean>(false);
  isPrintCardVisible = input<boolean>(false);
  isPrintAssetVisible = input<boolean>(false);
  isPrintQRCodeAssetVisible = input<boolean>(false);
  isPrintAssetBasedOnBUVisible = input<boolean>(false);
  isPrintTechnicalReportVisible = input<boolean>(false);

  // Note: Used for Support - Workflow Request Listing Table
  isApproveVisible = input<boolean>(false);
  isApproveBtnDisabled = input<boolean>(false);
  isTransferVisible = input<boolean>(false);
  isTransferBtnDisabled = input<boolean>(false);
  isReturnVisible = input<boolean>(false);
  isReturnBtnDisabled = input<boolean>(false);

  // Note: Used for Technical Report Listing Table
  isEditBtnDisabled = input<boolean>(false);

  viewBtnLabel = input<string>('viewBtnLabel');
  editBtnLabel = input<string>('editBtnLabel');
  deleteBtnLabel = input<string>('deleteBtnLabel');
  resendBtnLabel = input<string>('resendBtnLabel');
  copyBtnLabel = input<string>('copyBtnLabel');
  historyBtnLabel = input<string>('historyBtnLabel');
  listBtnLabel = input<string>('listBtnLabel');
  approveBtnLabel = input<string>('approveBtnLabel');
  transferBtnLabel = input<string>('transferBtnLabel');
  returnBtnLabel = input<string>('returnBtnLabel');
  printCardBtnLabel = input<string>('printCardBtnLabel');
  printAssetBtnLabel = input<string>('printAssetBtnLabel');
  printQRCodeAssetBtnLabel = input<string>('printQRCodeAssetBtnLabel');
  printAssetBasedOnBUBtnLabel = input<string>('printAssetBasedOnBUBtnLabel');
  printTechnicalReportBtnLabel = input<string>('printTechnicalReportBtnLabel');

  view = output<any>();
  edit = output<any>();
  delete = output<any>();
  resend = output<any>();
  actionCopy = output<any>();
  history = output<any>();
  list = output<any>();
  approve = output<any>();
  transfer = output<any>();
  actionReturn = output<any>();
  printCard = output<any>();
  printAsset = output<any>();
  printQRCodeAsset = output<any>();
  printAssetBasedOnBU = output<any>();
  printTechnicalReport = output<any>();

  onView() {
    this.view.emit(this.row());
  }

  onEdit() {
    this.edit.emit(this.row());
  }

  onDelete() {
    this.delete.emit(this.row());
  }

  onResend() {
    this.resend.emit(this.row());
  }

  onCopy() {
    this.actionCopy.emit(this.row());
  }

  onHistory() {
    this.history.emit(this.row());
  }

  onList() {
    this.list.emit(this.row());
  }

  onApprove() {
    this.approve.emit(this.row());
  }

  onTransfer() {
    this.transfer.emit(this.row());
  }

  onReturn() {
    this.actionReturn.emit(this.row());
  }

  onPrintCard() {
    this.printCard.emit(this.row());
  }

  onPrintAsset() {
    this.printAsset.emit(this.row());
  }

  onPrintQRCodeAsset() {
    this.printQRCodeAsset.emit(this.row());
  }

  onPrintAssetBasedOnBU() {
    this.printAssetBasedOnBU.emit(this.row());
  }

  onPrintTechnicalReport() {
    this.printTechnicalReport.emit(this.row());
  }
}
