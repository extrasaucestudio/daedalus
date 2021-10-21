// @flow
import type { StorageType, StorageKey } from '../types/electron-store.types';

export const STORAGE_TYPES: {
  [key: string]: StorageType,
} = {
  GET: 'get',
  SET: 'set',
  DELETE: 'delete',
  RESET: 'reset',
};

export const STORAGE_KEYS: {
  [key: string]: StorageKey,
} = {
  APP_AUTOMATIC_UPDATE_FAILED: 'APP-AUTOMATIC-UPDATE-FAILED',
  APP_UPDATE_COMPLETED: 'APP-UPDATE-COMPLETED',
  ASSET_DATA: 'ASSET-DATA',
  ASSET_SETTINGS_DIALOG_WAS_OPENED: 'ASSET-SETTINGS-DIALOG-WAS-OPENED',
  CURRENCY_ACTIVE: 'CURRENCY-ACTIVE',
  CURRENCY_SELECTED: 'CURRENCY-SELECTED',
  DATA_LAYER_MIGRATION_ACCEPTANCE: 'DATA-LAYER-MIGRATION-ACCEPTANCE',
  DOWNLOAD_MANAGER: 'DOWNLOAD-MANAGER',
  HARDWARE_WALLET_DEVICES: 'HARDWARE-WALLET-DEVICES',
  HARDWARE_WALLETS: 'HARDWARE-WALLETS',
  READ_NEWS: 'READ-NEWS',
  RESET: 'RESET',
  SMASH_SERVER: 'SMASH-SERVER',
  STAKING_INFO_WAS_OPEN: 'ALONZO-INFO-WAS-OPEN',
  TERMS_OF_USE_ACCEPTANCE: 'TERMS-OF-USE-ACCEPTANCE',
  THEME: 'THEME',
  TOKEN_FAVORITES: 'TOKEN-FAVORITES',
  USER_DATE_FORMAT_ENGLISH: 'USER-DATE-FORMAT-ENGLISH',
  USER_DATE_FORMAT_JAPANESE: 'USER-DATE-FORMAT-JAPANESE',
  USER_LOCALE: 'USER-LOCALE',
  USER_NUMBER_FORMAT: 'USER-NUMBER-FORMAT',
  USER_TIME_FORMAT: 'USER-TIME-FORMAT',
  WALLET_MIGRATION_STATUS: 'WALLET-MIGRATION-STATUS',
  WALLETS: 'WALLETS',
  WINDOW_BOUNDS: 'WINDOW-BOUNDS',
};
