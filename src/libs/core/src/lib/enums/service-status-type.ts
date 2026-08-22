export const SERVICE_STATUS_TYPE = {
  INACTIVE: 0,
  ACTIVE: 1,
} as const;

export type ServiceStatusTypeInterface =
  (typeof SERVICE_STATUS_TYPE)[keyof typeof SERVICE_STATUS_TYPE];
