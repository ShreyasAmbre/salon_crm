function appendToFormData(formData: FormData, data: unknown, parentKey = ''): void {
  if (data === null || data === undefined) {
    return;
  }

  if (data instanceof Date) {
    formData.append(parentKey, data.toISOString());
    return;
  }

  if (data instanceof File) {
    formData.append(parentKey, data);
    return;
  }

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      appendToFormData(formData, item, `${parentKey}[${index}]`);
    });
    return;
  }

  if (typeof data === 'object') {
    Object.entries(data).forEach(([key, value]) => {
      const formKey = parentKey ? `${parentKey}.${key}` : key;

      appendToFormData(formData, value, formKey);
    });

    return;
  }

  formData.append(parentKey, String(data));
}

export function toFormData(data: unknown): FormData {
  const formData = new FormData();

  appendToFormData(formData, data);

  return formData;
}

