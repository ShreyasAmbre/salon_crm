import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { format } from 'date-fns';

export const ngbDateToDate = (ngbDate: NgbDateStruct): Date => {
  return new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
};

export const ngbDateToDateUTC = (ngbDate: NgbDateStruct): Date => {
  return new Date(Date.UTC(ngbDate.year, ngbDate.month - 1, ngbDate.day));
};

export const dateToNgbDate = (date: Date): NgbDateStruct => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export const dateToNgbDateUTC = (date: Date): NgbDateStruct => {
  const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

  return {
    year: utcDate.getUTCFullYear(),
    month: utcDate.getUTCMonth() + 1,
    day: utcDate.getUTCDate(),
  };
};

export const dateToNgbTime = (date: Date): NgbTimeStruct => {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
};

export function ngbDateToDateFnsFormat(date: NgbDateStruct | null): string | null {
  if (!date) return null;
  const jsDate = new Date(date.year, date.month - 1, date.day);
  return format(jsDate, 'yyyy-MM-dd');
}

export function appendUtcSuffix(date: string): string {
  if (!date || date.trim() === '') {
    return '';
  }

  return date.endsWith('Z') ? date : date + 'Z';
}
