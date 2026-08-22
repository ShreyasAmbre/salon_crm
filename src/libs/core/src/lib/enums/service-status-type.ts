export const SERVICE_STATUS_TYPE = {
  INACTIVE: false,
  ACTIVE: true,
} as const;

export type ServiceStatusTypeInterface =
  (typeof SERVICE_STATUS_TYPE)[keyof typeof SERVICE_STATUS_TYPE];
