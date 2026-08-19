export function convertBase64ToFile(base64: string | null | undefined): Promise<Blob> {
  return new Promise((resolve, reject) => {
    if (base64) {
      const [metadata, data] = base64.split(',');
      const mimeMatch = metadata.match(/:(.*?);/);

      if (!mimeMatch || mimeMatch.length < 2) {
        reject('Invalid base64 string format');
      }

      const mimeString = mimeMatch?.[1];
      const byteCharacters = atob(data);
      const byteNumbers = new Uint8Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const blob = new Blob([byteNumbers], { type: mimeString });
      resolve(blob);
    } else {
      reject('');
    }
  });
}

export function convertBlobToFile(blob: Blob, fileName: string): File {
  return new File([blob], fileName, { type: blob.type });
}

export function convertFileToDataUrl(file: File): Promise<string> {
  if (!file || !(file instanceof File)) {
    console.error('Invalid file object provided');
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        console.error('Failed to read file');
        resolve('');
      }
    };

    reader.onerror = () => {
      console.error('Failed to read file');
      resolve('');
    };

    reader.readAsDataURL(file);
  });
}

export function getFileExtension(file: File) {
  const parts = file.name.split('.');
  if (parts.length <= 1) {
    return null;
  }
  return parts.pop() || null;
}

export const SUPPORTED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'image/jpeg',
  'image/png',
] as const;
type SupportedMimeType = (typeof SUPPORTED_MIME_TYPES)[number];
export interface ViewFileOptions {
  target?: '_blank' | '_self' | '_parent' | '_top';
  windowFeatures?: string;
  validateMimeType?: boolean;
  onError?: (error: Error) => void;
}
export class FileViewError extends Error {
  constructor(
    message: string,
    public readonly code: 'UNSUPPORTED_TYPE' | 'INVALID_FILE' | 'BROWSER_ERROR',
  ) {
    super(message);
    this.name = 'FileViewError';
  }
}
export function viewFile(file: File, options: ViewFileOptions = {}): () => void {
  const {
    target = '_blank',
    windowFeatures = 'noopener,noreferrer',
    validateMimeType = true,
    onError = console.error,
  } = options;

  try {
    // Validate file
    if (!file || !(file instanceof File)) {
      throw new FileViewError('Invalid file object provided', 'INVALID_FILE');
    }

    // Validate MIME type if enabled
    if (validateMimeType && !SUPPORTED_MIME_TYPES.includes(file.type as SupportedMimeType)) {
      throw new FileViewError(`Unsupported file type: ${file.type}`, 'UNSUPPORTED_TYPE');
    }

    // Create object URL
    const url = URL.createObjectURL(file);

    // Open window with security features
    const newWindow = window.open(url, target, windowFeatures);

    if (!newWindow) {
      throw new FileViewError(
        'Failed to open new window. Popup might be blocked.',
        'BROWSER_ERROR',
      );
    }

    // Setup cleanup
    const cleanup = () => {
      URL.revokeObjectURL(url);
      newWindow.removeEventListener('unload', cleanup);
    };

    // Attach cleanup to window unload
    newWindow.addEventListener('unload', cleanup);

    // Return cleanup function for manual cleanup if needed
    return cleanup;
  } catch (error) {
    if (error instanceof FileViewError) {
      onError(error);
      throw error;
    }
    // Handle unexpected errors
    const browserError = new FileViewError(
      'An unexpected error occurred while viewing the file',
      'BROWSER_ERROR',
    );
    onError(browserError);
    throw browserError;
  }
}

export function downloadDoc(attachedDoc: File) {
  const file = attachedDoc;

  if (!file) return;

  try {
    const doc = convertBlobToFile(file, file.name);

    const url = URL.createObjectURL(doc);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = doc.name;
    anchor.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('File download failed', error);
  }
}
