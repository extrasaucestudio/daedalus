// @flow
import { createTheme } from '../utils/createTheme';
import type { CreateThemeParams } from '../types';

//  ==== yellow theme output for Daedalus and react-polymorph components === //
export const YELLOW_THEME_OUTPUT = {
  aboutWindow: {
    '--theme-about-window-background-color': 'rgba(255, 185, 35, 0.96)',
    '--theme-about-window-header-bottom-border-color': 'rgba(45, 45, 45, 0.2)',
    '--theme-about-window-daedalus-icon-color': '#2d2d2d',
    '--theme-about-window-cardano-icon-color': '#2d2d2d',
    '--theme-about-window-title-varsion-color': '#2d2d2d',
    '--theme-about-window-title-stroke-color': '#2d2d2d',
    '--theme-about-window-content-color': '#2d2d2d',
    '--theme-about-window-content-text-color': '#2d2d2d',
    '--theme-about-window-content-bottom-border-color': '#2d2d2d4d',
    '--theme-about-window-icon-close-button-color': '#2d2d2d',
    '--theme-about-window-icon-close-hover-background': 'rgba(0, 0, 0, 0.1)',
  },
  appUpdate: {
    '--theme-node-update-background-color': '#f8f3ed',
    '--theme-node-update-title-color': '#2d2d2d',
    '--theme-node-update-message-color': '#2d2d2d',
    '--theme-node-sync-info-message-background-color': '#2d2d2d',
    '--theme-node-sync-info-message-text-color': '#ffffff',
    '--theme-node-sync-icon-color': '#2d2d2d',
    '--theme-node-update-accept-button-background-color': '#424242',
    '--theme-node-update-accept-button-background-color-hover': '#2d2d2d',
    '--theme-node-update-accept-button-background-color-active': '#222222',
    '--theme-node-update-deny-button-background-color': 'rgba(45, 45, 45, 0.4)',
    '--theme-node-update-deny-button-background-color-hover':
      'rgba(45, 45, 45, 0.6)',
    '--theme-node-update-deny-button-background-color-active':
      'rgba(45, 45, 45, 0.8)',
    '--theme-node-update-deny-button-text-color': '#fafbfc',
    '--theme-node-update-button-text-color': '#fafbfc',
  },
  appUpdateOverlay: {
    '--theme-app-update-overlay-background-color': 'rgba(255, 185, 35, 0.96)',
    '--theme-app-update-overlay-content-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-app-update-overlay-button-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-app-update-overlay-button-background-color-hover': '#2d2d2d',
    '--theme-app-update-overlay-button-icon-color': '#2d2d2d',
    '--theme-app-update-overlay-button-icon-color-hover': '#ffffff',
    '--theme-app-update-overlay-button-text-color-hover': '#ffffff',
    '--theme-app-update-overlay-button-border-color': '#2d2d2d',
    '--theme-app-update-overlay-opacity-text-color': 'rgba(45, 45, 45, 0.7)',
    '--theme-app-update-overlay-text-highlight-color': '#rgba(45, 45, 45, 1)',
    '--theme-app-update-overlay-text-color': 'rgba(45, 45, 45, 1)',
    '--theme-app-update-overlay-button-label-color': 'rgba(45, 45, 45, 1)',
    '--theme-app-update-overlay-button-label-color-hover': '#ffffff',
    '--theme-app-update-overlay-manual-update-text-color': '#ea4c5b',
  },
  automaticUpdate: {
    '--theme-automatic-update-overlay-background-color':
      'rgba(255, 185, 35, 0.96)',
    '--theme-automatic-update-overlay-button-background-color':
      'rgba(0, 0, 0, 0.1)',
    '--theme-automatic-update-overlay-button-background-color-hover': '#2d2d2d',
    '--theme-automatic-update-overlay-button-icon-color': '#2d2d2d',
    '--theme-automatic-update-overlay-button-icon-color-hover': '#ffffff',
    '--theme-automatic-update-overlay-button-text-color-hover': '#ffffff',
    '--theme-automatic-update-overlay-button-border-color': '#2d2d2d',
    '--theme-automatic-update-overlay-text-color': 'rgba(45, 45, 45, 0.7)',
    '--theme-automatic-update-overlay-text-highlight-color':
      'rgba(45, 45, 45, 1)',
    '--theme-automatic-update-overlay-title-text-color': 'rgba(45, 45, 45, 1)',
    '--theme-automatic-update-overlay-button-label-color':
      'rgba(45, 45, 45, 1)',
    '--theme-automatic-update-overlay-button-label-color-hover': '#ffffff',
    '--theme-automatic-update-overlay-button-label-color-light':
      'rgba(45, 45, 45, 0.8)',
    '--theme-automatic-update-overlay-close-button-color':
      'rgba(45, 45, 45, 1)',
    '--theme-automatic-update-overlay-close-button-hover-background':
      'rgba(0, 0, 0, 0.1)',
  },
  backToTopButton: {
    '--theme-back-to-top-button-background-color': '#2d2d2d',
    '--theme-back-to-top-button-text-color': '#ffffff',
    '--theme-back-to-top-button-box-shadow-color': 'rgba(0, 0, 0, 0.36)',
  },
  body: {
    '--theme-main-body-background-color': '#f8f3ed',
    '--theme-main-body-messages-color': '#2d2d2d',
  },
  borderedBox: {
    '--theme-bordered-box-background-color': '#ffffff',
    '--theme-bordered-box-border': '1px solid #e1dac6',
    '--theme-bordered-box-text-color': '#2d2d2d',
  },
  button: {
    '--theme-button-spinner-color': '#f8f7f3',
    '--theme-label-button-color': '#2d2d2d',
  },
  buttonAttention: {
    '--theme-button-attention-background-color': '#ea4c5b',
    '--theme-button-attention-background-color-hover': '#ee707c',
    '--theme-button-attention-background-color-active': '#a43540',
    '--theme-button-attention-background-color-disabled': '#ea4c5b',
    '--theme-button-attention-delete-text-color': '#fafbfc',
    '--theme-button-attention-delete-text-color-disabled': '#fafbfc',
    '--theme-button-attention-text-color': '#fafbfc',
    '--theme-button-attention-text-color-disabled': '#fafbfc',
    '--theme-button-attention-outline-color': '#f2949d',
  },
  buttonDisclaimer: {
    '--theme-button-disclaimer-background-color': '#ab1700',
    '--theme-button-disclaimer-background-color-hover': '#fafbfc',
    '--theme-button-disclaimer-background-color-active': '#fafbfc',
    '--theme-button-disclaimer-background-color-disabled':
      'rgba(171, 23, 0, .3)',
    '--theme-button-disclaimer-text-color-disabled': 'rgba(250, 251, 252, .3)',
    '--theme-button-disclaimer-text-color': '#fafbfc',
    '--theme-button-disclaimer-outline-color': 'rgba(250, 251, 252, .3)',
    '--theme-button-disclaimer-border-color': '#fafbfc',
    '--theme-button-disclaimer-border-color-disabled':
      'rgba(250, 251, 252, .3)',
  },
  buttonFlat: {
    '--theme-button-flat-background-color': 'rgba(45, 45, 45, 0.1)',
    '--theme-button-flat-background-color-hover': 'rgba(45, 45, 45, 0.05)',
    '--theme-button-flat-background-color-active': 'rgba(45, 45, 45, 0.12)',
    '--theme-button-flat-background-color-disabled': 'rgba(45, 45, 45, 0.1)',
    '--theme-button-flat-text-color-disabled': '#2d2d2d',
    '--theme-button-flat-text-color': '#2d2d2d',
    '--theme-button-flat-outline-color': 'rgba(94, 96, 102, 0.2)',
  },
  buttonFlatInvert: {
    '--theme-button-flat-invert-background-color': 'rgba(45, 45, 45, 0.2)',
    '--theme-button-flat-invert-background-color-hover':
      'rgba(45, 45, 45, 0.3)',
    '--theme-button-flat-invert-background-color-active':
      'rgba(45, 45, 45, 0.4)',
    '--theme-button-flat-invert-text-color': '#2d2d2d',
  },
  buttonPrimary: {
    '--theme-button-primary-background-color': '#2d2d2d',
    '--theme-button-primary-background-color-hover': '#575757',
    '--theme-button-primary-background-color-active': '#282828',
    '--theme-button-primary-background-color-disabled': '#2d2d2d',
    '--theme-button-primary-text-color-disabled': '#fff',
    '--theme-button-primary-text-color': '#fff',
    '--theme-button-primary-outline-color': 'rgba(255, 255, 255, 0.3)',
  },
  buttonPrimaryInvert: {
    '--theme-button-primary-invert-background-color': '#2d2d2d',
    '--theme-button-primary-invert-background-color-hover':
      'rgba(45, 45, 45, 0.9)',
    '--theme-button-primary-invert-background-color-active':
      'rgba(45, 45, 45, 0.8)',
    '--theme-button-primary-invert-text-color': '#ffffff',
  },
  connecting: {
    '--theme-connecting-background-color': 'rgba(255, 185, 35, 0.96)',
    '--theme-connecting-background-color1': 'rgba(255, 185, 35, 1)',
    '--theme-connecting-background-color2': 'rgba(255, 185, 35, 0.91)',
    '--theme-connecting-background-color3': 'rgba(255, 185, 35, 0.31)',
    '--theme-connecting-background-color4': 'rgba(255, 185, 35, 0)',
    '--theme-connecting-background-color5': 'rgba(255, 185, 35, 0)',
    '--theme-connecting-background-color6': 'rgba(255, 185, 35, 0.31)',
    '--theme-connecting-background-color7': 'rgba(255, 185, 35, 0.91)',
    '--theme-connecting-background-color8': 'rgba(255, 185, 35, 1)',
    '--theme-connecting-text-color': '#2d2d2d',
  },
  dapps: {
    '--theme-dapp-transaction-request-separator': '#2d2d2d',
    '--theme-dapp-transaction-request-fees-text-color': '#ea4c5b',
    '--theme-dapp-transaction-request-toggle-button-background-color':
      'rgba(45, 45, 45, 0.1)',
    '--theme-dapp-transaction-request-code-background-color':
      'rgba(45, 45, 45, 0.05)',
  },
  dataMigration: {
    '--theme-data-migration-layer-background-color': 'rgba(255, 185, 35, 0.96)',
    '--theme-data-migration-layer-box-shadow-color': '#fdcd68',
    '--theme-data-migration-layer-button-background-color':
      'rgba(0, 0, 0, 0.1)',
    '--theme-data-migration-layer-button-background-color-hover': '#2d2d2d',
    '--theme-data-migration-layer-button-border-color': '#2d2d2d',
    '--theme-data-migration-layer-button-label-color': '#2d2d2d',
    '--theme-data-migration-layer-text-color': '#2d2d2d',
    '--theme-data-migration-layer-text-color-hover': '#ffffff',
    '--theme-data-migration-layer-text-opacity-color': '#fafbfc',
  },
  delegationSetupWizard: {
    '--theme-delegation-steps-activation-steps-indicator-color': '#2d2d2d',
    '--theme-delegation-steps-success-description-color': '#2d2d2d',
    '--theme-delegation-steps-success-tada-color': 'rgba(45, 45, 45, 1)',
    '--theme-delegation-steps-choose-stake-pool-checkmark-icon-color':
      '#e1dac6',
    '--theme-delegation-steps-choose-stake-pool-delegated-pools-label-color':
      '#2d2d2d',
    '--theme-delegation-steps-choose-stake-pool-ticker-color': '#e1dac6',
    '--theme-delegation-steps-choose-stake-pool-select-box-placeholder-color':
      '#e1dac6',
    '--theme-delegation-steps-choose-stake-pool-selected-checkmark-icon-color':
      '#fafbfc',
    '--theme-delegation-steps-choose-stake-pool-selected-ticker-color':
      '#fafbfc',
    '--theme-delegation-steps-choose-stake-pool-thumb-background-color': '#fff',
    '--theme-delegation-steps-choose-stake-pool-thumb-border-color': '#e1dac6',
    '--theme-delegation-steps-choose-stake-pool-title-color': '#2d2d2d',
    '--theme-delegation-steps-choose-stake-pool-tooltip-arrow-color':
      '#2d2d2de6',
    '--theme-delegation-steps-choose-stake-pool-tooltip-background-color':
      '#2d2d2de6',
    '--theme-delegation-steps-choose-stake-pool-tooltip-box-shadow':
      '0 5px 20px 0 rgba(0, 0, 0, 0.25)',
    '--theme-delegation-steps-choose-stake-pool-tooltip-description-color':
      '#fafbfc',
    '--theme-delegation-steps-choose-stake-pool-tooltip-ticker-color':
      '#2d2d2d99',
    '--theme-delegation-steps-choose-stake-pool-tooltip-table-label-color':
      '#fafbfc',
    '--theme-delegation-steps-choose-stake-pool-tooltip-table-value-color':
      '#fafbfc',
    '--theme-delegation-steps-choose-stake-pool-tooltip-title-color': '#fafbfc',
    '--theme-delegation-steps-choose-stake-pool-tooltip-url-color': '#d6902f',
    '--theme-delegation-steps-choose-wallet-custom-value-color': '#2d2d2d',
    '--theme-delegation-steps-choose-wallet-description-color': '#2d2d2dcc',
    '--theme-delegation-steps-choose-wallet-description-highlighted-color':
      '#2d2d2d',
    '--theme-delegation-steps-choose-wallet-error-message-color': '#ea4c5b',
    '--theme-delegation-steps-choose-wallet-error-message-light-color':
      '#ea4c5bb3',
    '--theme-delegation-steps-choose-wallet-error-select-options-color':
      '#2d2d2d',
    '--theme-delegation-steps-choose-wallet-steps-indicator-color': '#2d2d2d',
    '--theme-delegation-steps-confirmation-steps-indicator-color': '#2d2d2d',
    '--theme-delegation-steps-confirmation-description-color': '#2d2d2dcc',
    '--theme-delegation-steps-confirmation-fees-label-color': '#2d2d2d',
    '--theme-delegation-steps-confirmation-fees-amount-color': '#ea4c5b',
    '--theme-delegation-steps-intro-content-text-color': '#2d2d2dcc',
    '--theme-delegation-steps-intro-divider-border-color': '#e1dac6',
    '--theme-delegation-steps-intro-link-color': '#d6902f',
    '--theme-delegation-steps-intro-list-label-color': '#2d2d2d',
    '--theme-delegation-steps-intro-list-numbers-color': '#2d2d2d',
    '--theme-delegation-steps-intro-list-optional-label-color': '#2d2d2d80',
    '--theme-delegation-steps-not-available-description-text-color':
      '#2d2d2dcc',
    '--theme-delegation-steps-not-available-description-highlight-text-color':
      '#2d2d2d',
    '--theme-delegation-steps-not-available-icon-color': '#2d2d2d',
    '--theme-delegation-steps-not-available-subtitle-text-color': '#2d2d2d',
  },
  dialog: {
    '--theme-dialog-choice-tabs-text-color': '#2d2d2d',
    '--theme-dialog-choice-tabs-text-color-active': '#2d2d2d',
    '--theme-dialog-choice-tabs-bottom-border-color-active': '#2d2d2d',
    '--theme-dialog-big-button-background-color': '#ffffff',
    '--theme-dialog-big-button-border-color': '#e1dac6',
    '--theme-dialog-big-button-label-color': '#2d2d2d',
    '--theme-dialog-big-button-description-color': 'rgba(45, 45, 45, 0.6)',
    '--theme-dialog-set-wallet-password-background-color':
      'rgba(255, 185, 35, 0.96)',
    '--theme-dialog-set-wallet-password-box-shadow': 'rgba(0, 0, 0, 0.25)',
    '--theme-dialog-set-wallet-password-message-color': 'rgba(45, 45, 45, 0.7)',
    '--theme-dialog-set-wallet-password-title-color': '#2d2d2d',
    '--theme-dialog-set-wallet-password-button-background-color':
      'rgba(0, 0, 0, 0.1)',
    '--theme-dialog-set-wallet-password-button-background-color-hover':
      '#2d2d2d',
    '--theme-dialog-set-wallet-password-button-border-color': '#2d2d2d',
    '--theme-dialog-set-wallet-password-button-color': '#2d2d2d',
    '--theme-dialog-set-wallet-password-button-color-hover': '#fff',
    '--theme-dialog-title-color': '#2d2d2d',
    '--theme-dialog-text-color': '#2d2d2d',
    '--theme-dialog-border-color': 'rgba(45, 45, 45, 0.2)',
    '--theme-dialog-fullsize-background-color': '#FFB923',
    '--theme-dialog-fullsize-background-color-opaque': '#fdbc31',
    '--theme-dialog-fullsize-button-background-color-hover':
      'rgba(0, 0, 0, 0.1)',
    '--theme-dialog-fullsize-button-background-color': '#2d2d2d',
    '--theme-dialog-fullsize-button-border-color': '#2d2d2d',
    '--theme-dialog-fullsize-button-icon-color': '#2d2d2d',
    '--theme-dialog-fullsize-button-icon-color-hover': '#ffffff',
    '--theme-dialog-fullsize-button-label-color': 'rgba(45, 45, 45, 1)',
    '--theme-dialog-fullsize-button-label-color-hover': '#ffffff',
    '--theme-dialog-fullsize-button-text-color-hover': '#ffffff',
    '--theme-dialog-fullsize-field-background-color': 'rgba(45, 45, 45, 0.07)',
    '--theme-dialog-fullsize-text-color': 'rgba(45, 45, 45, 0.7)',
    '--theme-dialog-fullsize-text-highlight-color': '#2d2d2d',
    '--theme-dialog-fullsize-title-text-color': 'rgba(45, 45, 45, 1)',
  },
  errors: {
    '--theme-color-error': '#ea4c5b',
    '--theme-background-color-error': 'rgba(234, 76, 91, .1)',
    '--theme-background-color-dark-error': 'rgba(234, 76, 91, .3)',
  },
  fonts: {
    '--font-ultralight': 'NotoSans-ExtraLight, NotoSansCJKjp-Thin',
    '--font-thin': 'NotoSans-Thin, NotoSansCJKjp-Thin',
    '--font-light': 'NotoSans-Light, NotoSansCJKjp-Light',
    '--font-regular': 'NotoSans-Regular, NotoSansCJKjp-Regular',
    '--font-medium': 'NotoSans-Medium, NotoSansCJKjp-Medium',
    '--font-semibold': 'NotoSans-SemiBold, NotoSansCJKjp-Medium',
    '--font-bold': 'NotoSans-Bold, NotoSansCJKjp-Bold',
    '--font-heavy': 'NotoSans-ExtraBold, NotoSansCJKjp-Black',
    '--font-black': 'NotoSans-Black, NotoSansCJKjp-Black',
    '--font-mono': 'SFMono-Light',
  },
  hardwareWallet: {
    '--theme-hardware-wallet-status-background-color': '#ffffff',
    '--theme-hardware-wallet-status-border-color': 'rgba(45, 45, 45, 0.3)',
    '--theme-hardware-wallet-status-color': '#2d2d2d',
    '--theme-hardware-wallet-status-ready-color': '#2dc06c',
    '--theme-hardware-wallet-title-color': '#2d2d2d',
    '--theme-hardware-wallet-message-color': '#2d2d2d',
    '--theme-hardware-wallet-status-passphrase-label-color':
      'rgba(45, 45, 45, 0.5)',
  },
  icon: {
    '--theme-icon-nav-color': 'rgba(45, 45, 45, 0.6)',
    '--theme-icon-nav-color-active': '#ffffff',
    '--theme-icon-sidebar-color': '#2d2d2d',
    '--theme-icon-toggle-menu-color': '#2d2d2d',
    '--theme-icon-node-update-notification-arrow-color': '#2d2d2d',
    '--theme-icon-add-wallet-from-sidebar-color': '#2d2d2d',
    '--theme-icon-ada-summary-wallet-amount-symbol-color': '#2d2d2d',
    '--theme-icon-add-wallet-dialog-big-button-color': 'rgba(45, 45, 45, 0.5)',
    '--theme-icon-back-button-color': '#2d2d2d',
    '--theme-icon-close-button-color': '#2d2d2d',
    '--theme-icon-connecting-ada-api-logo-color': '#2d2d2d',
    '--theme-icon-connecting-ada-logo-color': '#2d2d2d',
    '--theme-icon-connecting-daedalus-logo-color': '#2d2d2d',
    '--theme-icon-copy-address-color': '#2d2d2d',
    '--theme-icon-delegation-center-no-wallets': '#2d2d2d',
    '--theme-icon-file-upload-color': '#2d2d2d',
    '--theme-icon-syncing-ada-api-logo-color': '#2d2d2d',
    '--theme-icon-syncing-ada-logo-color': '#2d2d2d',
    '--theme-icon-syncing-daedalus-logo-color': '#2d2d2d',
    '--theme-icon-transactions-ada-symbol-color': '#2d2d2d',
    '--theme-icon-transaction-type-color': '#fafbfc',
  },
  input: {
    '--theme-input-background-color': '#fff',
    '--theme-input-border-color': 'rgba(45, 45, 45, 0.3)',
    '--theme-input-focus-border-color': 'rgba(45, 45, 45, 0.7)',
    '--theme-input-hint-font': 'NotoSans-Regular, NotoSansCJKjp-Regular',
    '--theme-input-label-color': '#2d2d2d',
    '--theme-input-placeholder-color': 'rgba(45, 45, 45, 0.5)',
    '--theme-input-remove-color-light': '#ea4c5b',
    '--theme-input-right-floating-text-color': 'rgba(45, 45, 45, 0.5)',
    '--theme-input-right-floating-text-success-color': 'rgba(45, 45, 45, 1)',
    '--theme-input-text-color': '#2d2d2d',
  },
  link: {
    '--theme-link-main-color': '#d6902f',
  },
  loading: {
    '--theme-loading-background-color': '#ffffff',
    '--theme-loading-no-disk-space-background-color': 'rgba(171, 23, 0, 0.94)',
    '--theme-loading-no-disk-space-text-color': '#ffffff',
    '--theme-loading-no-disk-space-attention-icon-color': '#ffffff',
    '--theme-loading-status-icons-on-color': '#009900',
    '--theme-loading-status-icons-off-color': '#ea4c5b',
    '--theme-loading-status-icons-unloaded-loading-color': '#2d2d2d',
    '--theme-loading-status-icons-unloaded-syncing-color': '#2d2d2d',
    '--theme-loading-status-icons-tooltip-color': 'var(--rp-pop-over-bg-color)',
    '--theme-loading-spinner-color': '#2d2d2d',
    '--theme-loading-spinner-medium-color': '#2d2d2d',
  },
  mnemonic: {
    '--theme-backup-mnemonic-background-color': '#f1eee6',
    '--theme-mnemonic-background-color': 'rgba(45, 45, 45, 0.07)',
  },
  modal: {
    '--theme-modal-overlay-background-color': 'rgba(0, 0, 0, 0.4)',
  },
  navDropdown: {
    '--theme-nav-dropdown-item-text-color': '#2d2d2d',
    '--theme-nav-dropdown-item-background-color': '#ffffff',
    '--theme-nav-dropdown-item-background-color-hover':
      'rgba(45, 45, 45, 0.07)',
    '--theme-nav-dropdown-item-color-hover': '#2d2d2d',
  },
  navItem: {
    '--theme-nav-item-background-color': '#ffb923',
    '--theme-nav-item-background-color-active': '#2d2d2d',
    '--theme-nav-item-background-color-hover': '#eda70e',
    '--theme-nav-item-text-color': 'rgba(45, 45, 45, 0.6)',
    '--theme-nav-item-text-color-active': '#fafbfc',
  },
  network: {
    '--theme-network-window-background-color': 'rgba(255, 185, 35, 0.96)',
    '--theme-network-window-text-color': '#2d2d2d',
    '--theme-network-window-icon-close-hover-background': 'rgba(0, 0, 0, 0.1)',
    '--theme-network-window-red-color': '#be0b0b',
    '--theme-network-window-green-color': '#008114',
    '--theme-network-window-white-color': '#2d2d2d',
    '--theme-network-window-transparent-color': 'transparent',
    '--theme-network-window-border-color': 'rgba(45, 45, 45, 0.2)',
    '--theme-network-window-button-text-color': '#ffffff',
    '--theme-network-window-button-background-color': 'rgba(45, 45, 45, 0.4)',
    '--theme-network-window-button-background-color-hover':
      'rgba(45, 45, 45, 0.6)',
    '--theme-network-window-button-background-color-active':
      'rgba(45, 45, 45, 0.8)',
  },
  newsFeed: {
    '--theme-news-feed-background-color': '#ffb923',
    '--theme-news-feed-badge-background-color': '#ea4c5b',
    '--theme-news-feed-badge-text-color': '#ffffff',
    '--theme-news-feed-box-shadow-color': '-5px 0 20px 0 rgba(0, 0, 0, 0.25)',
    '--theme-news-feed-header-background-color': '#eda70e',
    '--theme-news-feed-header-box-shadow-color':
      '0 10px 10px -5px rgba(0, 0, 0, 0.25)',
    '--theme-news-feed-header-title-color': '#2d2d2d',
    '--theme-news-feed-icon-close-button-color': '#2d2d2d',
    '--theme-news-feed-icon-close-hover-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-news-feed-icon-color': '#2d2d2d',
    '--theme-news-feed-icon-color-connecting-screen': '#2d2d2d',
    '--theme-news-feed-icon-color-syncing-screen': '#2d2d2d',
    '--theme-news-feed-icon-green-dot-background-color': '#009900',
    '--theme-news-feed-icon-red-dot-background-color': '#be0b0b',
    '--theme-news-feed-icon-toggle-hover-background-color':
      'rgba(0, 0, 0, 0.1)',
    '--theme-news-feed-no-fetch-color': '#2d2d2d',
    '--theme-news-feed-incident-overlay-background-color':
      'rgba(255, 185, 35, 0.98)',
    '--theme-news-feed-incident-overlay-text-color': '#2d2d2d',
    '--theme-news-feed-incident-overlay-button-color': '#2d2d2d',
    '--theme-news-feed-incident-overlay-scrollbar-thumb-background':
      'rgba(45, 45, 45, 0.3)',
    '--theme-news-feed-incident-overlay-scrollbar-thumb-background-hove':
      'rgba(45, 45, 45, 0.5)',
    '--theme-news-feed-incident-overlay-content-list-color':
      'rgba(45, 45, 45, 0.7)',
    '--theme-news-feed-incident-overlay-content-background':
      'rgba(0, 0, 0, 0.1)',
    '--theme-news-feed-incident-overlay-button-background':
      'rgba(0, 0, 0, 0.1)',
    '--theme-news-feed-incident-overlay-button-color-hover':
      'rgba(255, 255, 255, 1)',
    '--theme-news-feed-incident-grey-overlay-background-color':
      'rgba(68, 68, 68, 0.98)',
    '--theme-news-feed-incident-grey-overlay-text-color': '#ffffff',
    '--theme-news-feed-incident-grey-overlay-button-color': '#ffffff',
    '--theme-news-feed-incident-grey-overlay-scrollbar-thumb-background':
      'rgba(255, 255, 255, 0.3)',
    '--theme-news-feed-incident-grey-overlay-scrollbar-thumb-background-hove':
      'rgba(255, 255, 255, 0.5)',
    '--theme-news-feed-incident-grey-overlay-content-list-color':
      'rgba(255, 255, 255, 0.7)',
    '--theme-news-feed-incident-red-overlay-background-color':
      'rgba(171, 23, 0, 0.98)',
    '--theme-news-feed-incident-red-overlay-text-color': '#ffffff',
    '--theme-news-feed-incident-red-overlay-button-color': '#ffffff',
    '--theme-news-feed-incident-red-overlay-scrollbar-thumb-background':
      'rgba(255, 255, 255, 0.3)',
    '--theme-news-feed-incident-red-overlay-scrollbar-thumb-background-hove':
      'rgba(255, 255, 255, 0.5)',
    '--theme-news-feed-incident-red-overlay-content-list-color':
      'rgba(255, 255, 255, 0.7)',
  },
  newsItem: {
    '--theme-news-item-action-button-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-news-item-action-button-background-color-hover': '#2d2d2d',
    '--theme-news-item-action-button-border-color': '#2d2d2d',
    '--theme-news-item-action-button-color': '#2d2d2d',
    '--theme-news-item-action-button-color-hover': '#ffffff',
    '--theme-news-item-alert-background-color': 'rgba(249, 128, 10, 0.5)',
    '--theme-news-item-announcement-background-color':
      'rgba(31, 193, 195, 0.3)',
    '--theme-news-item-badge-green-color': '#009900',
    '--theme-news-item-badge-red-color': '#ea4c5b',
    '--theme-news-item-content-link-color': '#2d2d2d',
    '--theme-news-item-info-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-news-item-title-color': '#2d2d2d',
  },
  newsUpdateOverlay: {
    '--theme-news-overlay-update-background-color': 'rgba(255, 185, 35, 0.96)',
    '--theme-news-overlay-update-text-color': '#2d2d2d',
    '--theme-news-overlay-update-subtitle-text-color': 'rgba(45, 45, 45, 0.5)',
    '--theme-news-overlay-update-content-background-color':
      'rgba(0, 0, 0, 0.1)',
    '--theme-news-overlay-update-content-scroll-background-color':
      'rgba(45, 45, 45, 0.3)',
    '--theme-news-overlay-update-content-scroll-hover-background-color':
      'rgba(45, 45, 45, 0.5)',
    '--theme-news-overlay-update-button-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-news-overlay-update-button-text-color': '#2d2d2d',
    '--theme-news-overlay-update-button-hover-text-color': '#fafbfc',
    '--theme-news-overlay-update-button-background-color-hover': '#2d2d2d',
    '--theme-news-overlay-update-button-border-color': '#2d2d2d',
  },
  notification: {
    '--theme-notification-message-background-color': '#fdcd68f2',
    '--theme-notification-message-text-color': '#2d2d2d',
    '--theme-notification-message-checkmark-icon-color': '#2d2d2d',
    '--theme-notification-message-close-icon-color': '#2d2d2d',
    '--theme-legacy-badge-background-color': '#ab1700',
    '--theme-legacy-notification-background-color': '#ab2712',
    '--theme-legacy-notification-learn-more-button-text-color': '#fafbfc',
    '--theme-legacy-notification-learn-more-button-background-color':
      '#f8f3ed33',
    '--theme-legacy-notification-learn-more-button-background-color-hover':
      '#f8f3ed4d',
    '--theme-legacy-notification-learn-more-button-background-color-active':
      '#f8f3ed66',
    '--theme-legacy-notification-move-button-text-color': '#ab1700',
    '--theme-legacy-notification-move-button-background-color': '#fafbfc',
    '--theme-legacy-notification-move-button-background-color-hover':
      'rgb(250, 251, 252, 0.9)',
    '--theme-legacy-notification-move-button-background-color-active':
      'rgb(250, 251, 252, 0.8)',
    '--theme-legacy-notification-title-color': '#fafbfc',
    '--theme-legacy-notification-description-color': '#fafbfc',
  },
  paperWallet: {
    '--theme-paper-wallet-create-certificate-dialog-explorer-link-color':
      '#d6902f',
    '--theme-paper-wallet-create-certificate-dialog-explorer-link-background-color':
      'rgba(45, 45, 45, 0.07)',
  },
  progressBar: {
    '--theme-progress-bar-background-color': 'rgba(45, 45, 45, 0.3)',
    '--theme-progress-bar-foreground-color': 'rgba(45, 45, 45, 0.7)',
    '--theme-progress-bar-large-progress-stripe1': '#2d2d2d',
    '--theme-progress-bar-large-progress-stripe2': '#3f3e3e',
    '--theme-progress-bar-large-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-progress-bar-large-progress-dark-stripe1': '#2d2d2d',
    '--theme-progress-bar-large-progress-dark-stripe2': '#3f3e3e',
    '--theme-progress-bar-large-progress-light-stripe-1': '#000000',
    '--theme-progress-bar-large-progress-light-stripe-2-background-color':
      '#2d2d2d',
  },
  receiveQRCode: {
    '--theme-receive-qr-code-background-color': 'transparent',
    '--theme-receive-qr-code-foreground-color': '#000',
  },
  recoveryPhrase: {
    '--theme-recovery-phrase-normal-background-color': 'rgba(45, 45, 45, .1)',
    '--theme-recovery-phrase-normal-border-color': 'transparent',
    '--theme-recovery-phrase-warning-background-color': 'rgba(45, 45, 45, .1)',
    '--theme-recovery-phrase-attention-background-color':
      'rgba(234, 76, 91, .1)',
    '--theme-recovery-phrase-paper-wallet-background-color':
      'rgba(45, 45, 45, 0.1)',
    '--theme-recovery-phrase-paper-wallet-question-background-color':
      'rgba(45, 45, 45, 0.3)',
    '--theme-recovery-phrase-paper-wallet-question-text-color': '#eaeaea',
    '--theme-recovery-phrase-paper-wallet-text-color': 'rgba(45, 45, 45, 0.8)',
  },
  reportIssue: {
    '--theme-report-issue-button-background-color': '#2d2d2d',
    '--theme-report-issue-button-background-color-hover': '#424242',
    '--theme-report-issue-button-background-color-active': '#222222',
    '--theme-report-issue-connecting-background-color': '#fdcd68',
    '--theme-report-issue-connecting-text-color': '#2d2d2d',
    '--theme-report-issue-icon-color': '#f8f3ed',
  },
  rpAutocomplete: {
    '--rp-autocomplete-bg-color': '#fff',
    '--rp-autocomplete-border': '1px solid rgba(45, 45, 45, 0.3)',
    '--rp-autocomplete-border-color-opened': 'rgba(45, 45, 45, 0.7)',
    '--rp-autocomplete-input-text-color': 'rgba(45, 45, 45, 0.7)',
    '--rp-autocomplete-placeholder-color': 'rgba(45, 45, 45, 0.5)',
    '--rp-autocomplete-selected-word-box-bg-color': '#2d2d2d',
    '--rp-autocomplete-selected-word-dialog-box-bg-color': '#2d2d2d',
    '--rp-autocomplete-selected-word-dialog-text-color': '#fafbfc',
    '--rp-autocomplete-selected-word-text-color': '#fafbfc',
    '--rp-autocomplete-selected-words-font-family':
      'NotoSans-Regular, NotoSansCJKjp-Regular',
    '--rp-autocomplete-required-words-color': 'rgba(45, 45, 45, 0.5)',
    '--rp-autocomplete-required-words-offset-top': '2px',
  },
  rpBubble: {
    '--rp-bubble-bg-color': '#fff',
    '--rp-bubble-border-color': 'rgba(45, 45, 45, 0.7)',
    '--rp-bubble-border-radius': '5px',
    '--rp-bubble-arrow-bg-color': '#edeeef',
    '--rp-bubble-box-shadow':
      '0 4px 16px 0 rgba(0, 0, 0, 0.12), 0 0 8px 0 rgba(0, 0, 0, 0.06)',
  },
  rpButton: {
    '--rp-button-bg-color': '#2d2d2d',
    '--rp-button-bg-color-active': '#222222',
    '--rp-button-bg-color-disabled': 'rgba(45, 45, 45, 0.3)',
    '--rp-button-bg-color-hover': '#424242',
    '--rp-button-font-family': 'NotoSans-Medium, NotoSansCJKjp-Medium',
    '--rp-button-font-size': '14px',
    '--rp-button-height': '50px',
    '--rp-button-line-height': '20px',
    '--rp-button-padding': '0',
    '--rp-button-text-color': '#fafbfc',
    '--rp-button-text-color-disabled': '#fafbfc',
    '--rp-button-text-transform': 'none',
    '--rp-button-width': '360px',
  },
  rpCheckbox: {
    '--rp-checkbox-border': '2px solid #2d2d2d',
    '--rp-checkbox-border-color': '#e1dac6',
    '--rp-checkbox-border-color-disabled': '#2d2d2d66',
    '--rp-checkbox-check-bg-color': '#2d2d2d',
    '--rp-checkbox-check-icon-color': '#ffffff',
    '--rp-checkbox-label-text-color': '#2d2d2d',
    '--rp-checkbox-label-text-color-disabled': '#2d2d2d4d',
    '--rp-checkbox-size': '22px',
  },
  rpColors: {
    '--rp-theme-color-error': '#ea4c5b',
  },
  rpFonts: {
    '--rp-theme-font-thin': 'NotoSans-Thin, NotoSansCJKjp-Thin',
    '--rp-theme-font-light': 'NotoSans-Light, NotoSansCJKjp-Light',
    '--rp-theme-font-medium': 'NotoSans-Medium, NotoSansCJKjp-Medium',
    '--rp-theme-font-regular': 'NotoSans-Regular, NotoSansCJKjp-Regular',
    '--rp-theme-font-bold': 'NotoSans-Bold, NotoSansCJKjp-Bold',
  },
  rpFormfield: {
    '--rp-formfield-bg-color-disabled': 'none',
    '--rp-formfield-label-text-color': '#2d2d2d',
    '--rp-formfield-label-text-color-disabled': '#2d2d2d',
    '--rp-formfield-error-text-color': '#be0b0b',
    '--rp-formfield-error-text-opacity': '0.75',
  },
  rpInput: {
    '--rp-input-bg-color': '#ffffff',
    '--rp-input-bg-color-disabled': 'rgba(45, 45, 45, 0.05)',
    '--rp-input-border-color': 'rgba(45, 45, 45, 0.3)',
    '--rp-input-border-color-disabled': 'rgba(45, 45, 45, 0.05)',
    '--rp-input-border-color-errored': '#ea4c5b',
    '--rp-input-border-color-focus': 'rgba(45, 45, 45, 0.7)',
    '--rp-input-line-height': '22px',
    '--rp-input-padding': '12px 20px',
    '--rp-input-placeholder-color': '#2d2d2d80',
    '--rp-input-placeholder-color-disabled': 'rgba(45, 45, 45, 0.5)',
    '--rp-input-text-color': '#2d2d2d',
    '--rp-input-text-color-disabled': 'rgba(45, 45, 45, 0.5)',
  },
  rpLink: {
    '--rp-link-color': '#d6902f',
  },
  rpModal: {
    '--rp-modal-bg-color': '#ffffff',
    '--rp-modal-max-height': '90%',
    '--rp-modal-overlay-bg-color': 'rgba(0, 0, 0, 0.4)',
  },
  rpOptions: {
    '--rp-option-bg-color': '#fff',
    '--rp-option-bg-color-highlighted': 'rgba(45, 45, 45, 0.07)',
    '--rp-option-border-color': 'rgba(45, 45, 45, 0.7)',
    '--rp-option-checkmark-color': '#2d2d2d',
    '--rp-option-line-height': '22px',
    '--rp-option-text-color': '#2d2d2d',
    '--rp-options-border-color': 'rgba(45, 45, 45, 0.7)',
    '--rp-options-shadow': 'none',
    '--rp-option-search-highlight-background-color': 'rgba(125, 3, 146, 0.3)',
  },
  rpPasswordInput: {
    '--rp-password-input-tooltip-border-radius': '5px',
    '--rp-password-input-error-score-color': '#ea4c5b',
    '--rp-password-input-error-bg-color': 'rgba(234, 76, 91, 0.4)',
    '--rp-password-input-warning-score-color': '#f2a218',
    '--rp-password-input-warning-bg-color': 'rgba(242, 162, 24, 0.4)',
    '--rp-password-input-success-score-color': '#009900',
    '--rp-password-input-success-bg-color': 'rgba(45, 192, 108, 0.4)',
    '--rp-password-input-tooltip-font-family': 'var(--rp-theme-font-medium)',
  },
  rpPopOver: {
    '--rp-pop-over-bg-color': 'rgba(45,45,45,0.9)',
    '--rp-pop-over-text-color': 'white',
  },
  rpRadio: {
    '--rp-radio-border': '2px solid #2d2d2d',
    '--rp-radio-border-color': '#2d2d2d',
    '--rp-radio-color': '#ffffff',
    '--rp-radio-label-margin': '0 0 0 10px',
    '--rp-radio-label-text-color': '#2d2d2d',
    '--rp-radio-size': '22px',
  },
  rpScrollBar: {
    '--rp-scrollbar-thumb-bg-color:': 'rgba(45, 45, 45, 0.3)',
    '--rp-scrollbar-thumb-bg-color-active': 'rgba(45, 45, 45, 0.5)',
    '--rp-scrollbar-thumb-bg-color-hover': 'rgba(45, 45, 45, 0.5)',
  },
  rpSelect: {
    '--rp-select-arrow-bg-color': 'rgba(45, 45, 45, 0.2)',
    '--rp-select-arrow-bg-color-open': '#2d2d2d',
    '--rp-select-input-bg-color': 'transparent',
    '--rp-select-input-border-color': 'rgba(45, 45, 45, 0.3)',
    '--rp-select-input-border-color-focus': 'rgba(45, 45, 45, 0.7)',
    '--rp-select-input-text-color': '#2d2d2d',
    '--rp-select-input-placeholder-color': 'rgba(45, 45, 45, 0.5)',
  },
  rpStepper: {
    '--rp-stepper-bullet-background-color-disabled': '#ffffff',
    '--rp-stepper-bullet-border-color': '#2d2d2d1a',
    '--rpstepper-bullet-height': '12px',
    '--rpstepper-bullet-width': '12px',
    '--rp-stepper-label-color': '#2d2d2d',
    '--rp-stepper-label-color-light': '#2d2d2d4d',
    '--rp-stepper-main-color': '#2d2d2d',
    '--rp-stepper-main-color-light': '#2d2d2d1a',
    '--rpstepper-stepper-step-label-bottom-margin': '6px',
    '--rpstepper-steps-bar-color-disabled': '#2d2d2d1a',
    '--rpstepper-steps-bar-top-position': '6px',
  },
  rpSwitch: {
    '--rp-switch-bg-color-off': '#2d2d2d',
    '--rp-switch-bg-color-on': '#2d2d2d',
    '--rp-switch-label-margin': '0 30px 0 0',
    '--rp-switch-label-opacity': '1',
    '--rp-switch-label-text-color': '#2d2d2d',
    '--rp-switch-label-width': '100%',
    '--rp-switch-normal-border-radius': '2px',
    '--rp-switch-opacity-off': '0.3',
    '--rp-switch-root-margin': '0 0 30px 0',
    '--rp-switch-tiny-border-radius': '1px',
    '--rp-switch-thumb-bg-color': '#fff',
    '--rp-switch-size': '22px',
  },
  rpTextArea: {
    '--rp-textarea-bg-color': '#f8f3ed',
    '--rp-textarea-bg-color-disabled': 'rgba(45, 45, 45, 0.05)',
    '--rp-textarea-border': '1px solid rgba(45, 45, 45, 0.3)',
    '--rp-textarea-border-color-disabled': 'rgba(45, 45, 45, 0.05)',
    '--rp-textarea-border-color-errored': '#ea4c5b',
    '--rp-textarea-border-color-focus': 'rgba(45, 45, 45, 0.7)',
    '--rp-textarea-border-radius': '2px',
    '--rp-textarea-line-height': '20px',
    '--rp-textarea-placeholder-color': 'rgba(45, 45, 45, 0.5)',
    '--rp-textarea-resize': 'none',
    '--rp-textarea-text-color': '#2d2d2d',
  },
  rpTooltip: {
    '--rp-tooltip-bg-color': '#2d2d2d',
    '--rp-tooltip-text-color': '#ffffff',
  },
  scrollbar: {
    '--theme-scrollbar-thumb-background': 'rgba(45, 45, 45, 0.3)',
  },
  sendConfirmation: {
    '--theme-send-confirmation-dialog-send-values-color': '#ea4c5b',
  },
  settings: {
    '--theme-settings-body-background-color': '#f8f3ed',
    '--theme-settings-delete-button-legacy-background-color':
      'rgba(45, 45, 45, 0.1)',
    '--theme-settings-delete-button-legacy-background-color-hover':
      'rgba(41, 181, 149, 1)',
    '--theme-settings-pane-background-color': '#fff',
    '--theme-settings-pane-border': '1px solid #e1dac6',
    '--theme-settings-menu-box-background-color': '#fff',
    '--theme-settings-menu-box-border': '1px solid #e1dac6',
    '--theme-settings-menu-item-text-color': '#2d2d2d',
    '--theme-settings-menu-item-text-color-active': '#2d2d2d',
    '--theme-settings-menu-item-text-color-disabled': '#2d2d2d80',
    '--theme-settings-menu-item-background-color-active':
      'rgba(45, 45, 45, 0.07)',
    '--theme-settings-menu-item-left-border-color-active':
      'rgba(45, 45, 45, 1)',
    '--theme-settings-theme-select-title-color': '#2d2d2d',
    '--theme-settings-theme-select-border-color': '#e1dac6',
    '--theme-settings-undelegate-wallet-divider-border-color': '#e1dac6',
    '--theme-settings-undelegate-wallet-deposit-amount-color': '#009900',
    '--theme-settings-undelegate-wallet-fees-amount-color': '#ea4c5b',
  },
  sidebar: {
    '--theme-sidebar-background-color': '#fdcd68',
    '--theme-sidebar-category-background-color-hover':
      'rgba(255, 185, 35, 0.5)',
    '--theme-sidebar-category-background-color-active': '#ffb923',
    '--theme-sidebar-category-text-color': '#2d2d2d',
    '--theme-sidebar-layout-shadow-color': 'rgba(0, 0, 0, 0.25)',
    '--theme-sidebar-layout-topbar-shadow-color': 'rgba(0, 0, 0, 0.25)',
    '--theme-sidebar-menu-background-color': '#f6af18',
    '--theme-sidebar-menu-item-background-color-hover':
      'rgba(237, 167, 14, 0.5)',
    '--theme-sidebar-menu-item-background-color-active': '#eea70e',
    '--theme-sidebar-menu-item-wallet-name-color': '#2d2d2d',
    '--theme-sidebar-menu-item-wallet-info-color': '#2d2d2d',
    '--theme-sidebar-menu-add-button-background-color': '#eea70e',
    '--theme-sidebar-menu-add-button-background-color-active': '#eea70ea8',
    '--theme-sidebar-menu-add-button-background-color-hover': '#eea70ea8',
    '--theme-sidebar-menu-add-button-text-color': '#2d2d2d',
    '--theme-sidebar-wallets-scrollbar-background-color':
      'rgba(45, 45, 45, 0.3)',
    '--theme-sidebar-wallets-scrollbar-background-color-active':
      'rgba(45, 45, 45, 0.5)',
    '--theme-sidebar-wallets-scrollbar-background-color-hover':
      'rgba(45, 45, 45, 0.5)',
    '--theme-sidebar-category-networkInfo-background-color': '#2d2d2d',
    '--theme-sidebar-category-networkInfo-text-color': '#fff',
  },
  splash: {
    '--theme-splash-network-background-color': 'rgba(255, 185, 35, 0.96)',
    '--theme-splash-network-background-color1': 'rgba(18, 19, 38, 1)',
    '--theme-splash-network-background-color2': 'rgba(18, 19, 38, 0.91)',
    '--theme-splash-network-background-color3': 'rgba(18, 19, 38, 0.31)',
    '--theme-splash-network-background-color4': 'rgba(18, 19, 38, 0)',
    '--theme-splash-network-background-color5': 'rgba(18, 19, 38, 0)',
    '--theme-splash-network-background-color6': 'rgba(18, 19, 38, 0.31)',
    '--theme-splash-network-background-color7': 'rgba(18, 19, 38, 0.91)',
    '--theme-splash-network-background-color8': 'rgba(18, 19, 38, 1)',
    '--theme-splash-network-logo-fill-color': '#2d2d2d',
    '--theme-splash-network-overlay-button-background-color':
      'rgba(0, 0, 0, 0.1)',
    '--theme-splash-network-overlay-button-background-color-hover': '#2d2d2d',
    '--theme-splash-network-overlay-button-border-color': '#2d2d2d',
    '--theme-splash-network-overlay-button-text-color': '#2d2d2d',
    '--theme-splash-network-overlay-button-text-color-hover': '#fff',
    '--theme-splash-network-title-color': '#2d2d2d',
    '--theme-splash-network-scrollbar-thumb-background':
      'rgba(45, 45, 45, 0.3)',
    '--theme-splash-network-scrollbar-thumb-background-hover':
      'rgba(45, 45, 45, 0.5)',
    '--theme-splash-network-subTitle1-color': 'rgba(45, 45, 45, 0.5)',
    '--theme-splash-network-subTitle2-color': 'rgba(45, 45, 45, 0.5)',
    '--theme-splash-network-description-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-splash-network-description-color': 'rgba(45, 45, 45, 0.7)',
    '--theme-splash-network-description-bold-color': '#2d2d2d',
    '--theme-splash-network-learn-more-color': '#2d2d2d',
  },
  stakePools: {
    '--theme-staking-stake-pools-title-color': '#2d2d2d',
    '--theme-staking-stake-pools-search-button-color': '#2d2d2d',
    '--theme-staking-stake-pool-background-color': '#ffffff',
    '--theme-staking-stake-pool-border-color': '#e1dac6',
    '--theme-staking-stake-pool-glow-color': 'rgba(45, 45, 45, 0.14)',
    '--theme-staking-stake-pool-grey-color': '#b2b3b6',
    '--theme-staking-stake-pool-grey-bg-color': 'rgba(45, 45, 45, 0.1)',
    '--theme-staking-stake-pools-search-icon-color': '#2d2d2d',
    '--theme-staking-stake-pool-saturation-background-color':
      'rgba(45, 45, 45, 0.2)',
    '--theme-staking-stake-pool-saturation-green-color': '#1ccc5d',
    '--theme-staking-stake-pool-saturation-orange-color': '#ff8800',
    '--theme-staking-stake-pool-saturation-red-color': '#ea4c5b',
    '--theme-staking-stake-pool-saturation-yellow-color': '#ffcc00',
    '--theme-staking-stake-pool-selected-background-color': '#5da377',
    '--theme-staking-stake-pool-selected-checkmark-icon-color': '#fafbfc',
    '--theme-staking-stake-pool-selected-ticker-color': '#fafbfc',
    '--theme-staking-stake-pool-ticker-color': '#2d2d2d',
    '--theme-staking-stake-pool-retirement-background-color': '#ea4c5b',
    '--theme-staking-stake-pool-tooltip-background-color': '#ffffff',
    '--theme-staking-stake-pool-tooltip-border-color': '#e1dac6',
    '--theme-staking-stake-pool-tooltip-shadow-color': 'rgba(0, 0, 0, 0.25)',
    '--theme-staking-stake-pool-tooltip-text-color': '#2d2d2d',
    '--theme-staking-stake-pool-tooltip-link-color': '#d6902f',
    '--theme-staking-stake-pool-tooltip-table-title-color': '#2d2d2d',
    '--theme-staking-stake-pool-tooltip-table-param-color': '#2d2d2d',
    '--theme-staking-stake-pool-tooltip-retirement-text-color': '#fafbfc',
    '--theme-staking-stake-pool-tooltip-retirement-background-color': '#ea4c5b',
    '--theme-staking-stake-pool-tooltip-delegate-button-background-color':
      '#2d2d2d',
    '--theme-staking-stake-pool-tooltip-delegate-button-hover-background-color':
      '#575757',
    '--theme-staking-stake-pool-tooltip-delegate-button-active-background-color':
      '#282828',
    '--theme-staking-stake-pool-tooltip-delegate-button-text-color': '#fafbfc',
    '--theme-staking-stake-pool-tooltip-delegate-button-inverse-text-color':
      '#fafbfc',
    '--theme-staking-stake-pool-tooltip-delegate-button-border-color':
      'transparent',
    '--theme-staking-progress-label-light': '#ffffff',
    '--theme-staking-stake-pools-search-clear-button-background-color':
      'rgba(45, 45, 45, 0.1)',
    '--theme-staking-stake-pools-search-clear-button-color': '#2d2d2d',
    '--theme-staking-stake-pools-search-clear-button-hover-background-color':
      'rgba(45, 45, 45, 0.05)',
    '--theme-staking-stake-pool-tooltip-neutral-background-color':
      'rgba(45, 45, 45, .1)',
    '--theme-staking-stake-pool-tooltip-neutral-text-color': '#2d2d2d',
    '--theme-staking-stake-pool-tooltip-id-background-color':
      'rgba(45, 45, 45, 0.05)',
    '--theme-staking-stake-pool-tooltip-id-shadow-1': 'rgba(0, 0, 0, 0.25)',
    '--theme-staking-stake-pool-tooltip-id-shadow-2': 'rgba(42, 43, 60, 0)',
  },
  staking: {
    '--theme-staking-content-background-color': '#ffffff',
    '--theme-staking-content-border-color': '#e1dac6',
    '--theme-staking-font-color-accent': '#2d2d2d',
    '--theme-staking-font-color-regular': '#2d2d2d',
    '--theme-staking-font-color-light': '#2d2d2db3',
    '--theme-staking-font-color-lighter': 'rgba(45, 45, 45, 0.5)',
    '--theme-staking-table-head-background-color': 'rgba(45, 45, 45, 0.07)',
    '--theme-staking-table-border-color': '#e1dac6',
    '--theme-staking-link-color': '#d6902f',
    '--theme-staking-link-color-light': 'rgba(214, 144, 47, 0.7)',
    '--theme-staking-progress-bar-background-color': 'rgba(45, 45, 45, 0.07)',
    '--theme-staking-progress-stripe-dark-1-background-color': '#000000',
    '--theme-staking-progress-stripe-dark-2-background-color': '#2d2d2d',
    '--theme-staking-slider-background-color-1': '#2d2d2d',
    '--theme-staking-slider-background-color-2': '#2d2d2d',
    '--theme-staking-slider-box-shadow-color': 'rgba(0, 0, 0, 0.24)',
    '--theme-staking-table-body-highlighted-text-color': '#d6902f',
    '--theme-staking-info-learn-more-button-text-color': '#f8f7f3',
    '--theme-staking-info-learn-more-icon-color': '#fafbfc',
    '--theme-staking-learn-more-button-color': '#f8f7f3',
    '--theme-staking-learn-more-icon-color': '#fafbfc',
    '--theme-staking-donut-ring-completed-color': 'rgba(234, 76, 91, 0.2)',
    '--theme-staking-donut-ring-remaining-color': '#ea4c5b',
    '--theme-staking-wallet-row-border-color': '#e1dac6',
    '--theme-staking-dropdown-item-text-color-hover': '#2d2d2d',
    '--theme-staking-dropdown-item-background-color': '#ffffff',
    '--theme-staking-dropdown-item-background-color-hover':
      'rgba(45, 45, 45, 0.07)',
    '--theme-staking-delegation-center-gear-icon-fill-color': '#2d2d2d80',
    '--theme-staking-delegation-center-gear-icon-fill-color-active': '#2d2d2d',
    '--theme-staking-delegation-center-no-wallets-instructions-color':
      '#2d2d2d',
    '--theme-staking-delegation-center-divider-border-color': '#e1dac6',
    '--theme-staking-delegation-center-fees-amount-color': '#ea4c5b',
    '--theme-staking-countdown-widget-background-color':
      'rgba(45, 45, 45, 0.07)',
    '--theme-staking-countdown-widget-delimeter-background-color': '#2d2d2d',
    '--theme-staking-countdown-widget-field-label-color':
      'rgba(45, 45, 45, 0.7)',
    '--theme-staking-countdown-widget-field-value-color': '#2d2d2d',
    '--theme-staking-export-button-shadow-color': 'rgba(45, 45, 45, 0.18)',
    '--theme-staking-export-button-color': '#f8f7f3',
    '--theme-staking-wallet-row-action-undelegate-text-color': '#ea4c5b',
    '--theme-staking-wallet-row-ticker-background-color':
      'rgba(45, 45, 45, 0.07)',
    '--theme-staking-wallet-row-ticker-text-color': '#2d2d2d',
    '--theme-staking-wallet-row-ticker-ada-icon-fill-color': '#2d2d2d80',
    '--theme-staking-redeemItnRewards-text-color': '#2d2d2d',
    '--theme-staking-redeemItnRewards-separator-color': '#e4b95e',
    '--theme-staking-redeemItnRewards-attention-text-color': '#ea4c5b',
    '--theme-staking-redeemItnRewards-description-text-color': '#f9f5f1b3',
    '--theme-staking-redeemItnRewards-icon-color': '#2d2d2d',
  },
  support: {
    '--theme-support-settings-item-color': '#2d2d2d',
    '--theme-support-settings-link-color': '#d6902f',
    '--theme-support-settings-text-color': '#2d2d2d',
  },
  syncing: {
    '--theme-syncing-background-color': '#ffffff',
    '--theme-syncing-text-color': '#2d2d2d',
  },
  systemError: {
    '--theme-system-error-overlay-attention-icon-color': '#fafbfc',
    '--theme-system-error-overlay-background-color': 'rgba(171, 23, 0, 0.94)',
    '--theme-system-error-overlay-support-link-icon-color': '#fafbfc',
    '--theme-system-error-overlay-text-color': '#fafbfc',
  },
  tabs: {
    '--theme-choice-tabs-text-color': '#2d2d2d',
    '--theme-choice-tabs-text-color-active': '#2d2d2d',
    '--theme-choice-tabs-bottom-border-color-active': '#2d2d2d',
  },
  testEnvironment: {
    '--theme-test-environment-label-background-color': '#ab1700',
    '--theme-test-environment-label-text-color': '#fafbfc',
  },
  topBar: {
    '--theme-topbar-background-color': '#ffb923',
    '--theme-topbar-layout-body-background-color': '#f8f3ed',
    '--theme-topbar-wallet-name-color': '#2d2d2d',
    '--theme-topbar-wallet-info-color': '#2d2d2d',
    '--theme-topbar-logo-color': '#2d2d2d',
  },
  transactions: {
    '--theme-transactions-list-background-color': '#fff',
    '--theme-transactions-list-border-color': '#e1dac6',
    '--theme-transactions-list-group-date-color': '#2d2d2d',
    '--theme-transactions-list-item-details-color': '#2d2d2d',
    '--theme-transactions-list-item-highlight-color': '#ea4c5b',
    '--theme-transactions-state-ok-background-color': '#007600',
    '--theme-transactions-state-pending-background-color':
      'rgba(45, 45, 45, 0.5)',
    '--theme-transactions-state-text-color': '#ffffff',
    '--theme-transactions-search-background-color': '#f8f3ed',
    '--theme-transactions-icon-type-expend-background-color': '#84a2d2',
    '--theme-transactions-icon-type-income-background-color': '#009900',
    '--theme-transactions-icon-type-exchange-background-color': '#10aca4',
    '--theme-transactions-arrow-stroke-color': '#2d2d2d',
    '--theme-transactions-icon-type-pending-regular-background-color':
      'rgba(45, 45, 45, 0.5)',
    '--theme-transactions-icon-type-pending-warning-background-color':
      'rgba(236, 93, 107, 0.8)',
    '--theme-transactions-icon-type-failed-background-color':
      'rgba(236, 93, 107, 1)',
    '--theme-transactions-state-pending-warning-background-color': '#ec5d6b',
    '--theme-transactions-filter-button-shadow-color': 'rgba(45, 45, 45, 0.18)',
    '--theme-transactions-filter-button-color': '#f8f7f3',
    '--theme-transactions-date-picker-button-background-color':
      'rgba(45, 45, 45, 0.14)',
    '--theme-transactions-date-picker-button-background-color-hover':
      'rgba(45, 45, 45, 0.07)',
    '--theme-transactions-date-picker-button-color': '#2d2d2d',
    '--theme-transactions-filter-modal-bg-color': '#ffffff',
    '--theme-transactions-filter-date-picker-shadow':
      '0 5px 20px 0 rgba(0, 0, 0, 0.25)',
    '--theme-transactions-filter-title-button-text-color': '#2d2d2d',
    '--theme-transactions-filter-title-button-background-color':
      'rgba(45, 45, 45, 0.1)',
    '--theme-transactions-filter-title-button-background-color-hover':
      'rgba(45, 45, 45, 0.05)',
    '--theme-transactions-filter-title-button-background-color-active':
      'rgba(45, 45, 45, 0.12)',
    '--theme-transactions-transfer-funds-selected-wallet-background-color':
      '#2d2d2d0d',
    '--theme-transactions-header-background-color': '#f8f3ed',
    '--theme-transactions-header-texct-color': '#2d2d2d80',
  },
  tokens: {
    '--theme-tokens-list-header-text-color': '#2d2d2d80',
    '--theme-tokens-list-header-expanded-background-color':
      'rgba(45, 45, 45, 0.05)',
    '--theme-tokens-list-header-expanded-background-color-hover':
      'rgba(45, 45, 45, 0.03)',
  },
  uploader: {
    '--theme-uploader-text-color': '#2d2d2d',
    '--theme-uploader-border-color': 'rgba(45, 45, 45, 0.3)',
  },
  utxo: {
    '--theme-utxo-background-color': 'rgba(45, 45, 45, 0.05)',
    '--theme-utxo-title-text-color': '#2d2d2d',
    '--theme-utxo-title-description-color': '#2d2d2db3',
    '--theme-utxo-bar-color': 'rgba(45, 45, 45, 0.5)',
    '--theme-utxo-label-text-color': '#2d2d2d73',
    '--theme-utxo-tick-text-color': '#2d2d2d73',
    '--theme-utxo-cursor-background-color': 'rgba(45, 45, 45, 0.1)',
    '--theme-utxo-tooltip-background-color': '#2d2d2d',
    '--theme-utxo-tooltip-shadow-color': 'rgba(0, 0, 0, 0.18)',
    '--theme-utxo-tooltip-text-color': '#fff',
  },
  voting: {
    '--theme-voting-font-color-accent': '#2d2d2d',
    '--theme-voting-font-color-light': '#2d2d2db3',
    '--theme-voting-font-color-regular': '#2d2d2d',
    '--theme-voting-info-background-color': 'rgba(45, 45, 45, 0.1)',
    '--theme-voting-info-font-color': '#2d2d2d',
    '--theme-voting-registration-steps-activation-steps-indicator-color':
      '#2d2d2d',
    '--theme-voting-registration-steps-choose-wallet-error-message-color':
      '#ea4c5b',
    '--theme-voting-registration-steps-choose-wallet-error-message-light-color':
      '#ea4c5bb3',
    '--theme-voting-registration-steps-deposit-fees-amount-color': '#ea4c5b',
    '--theme-voting-registration-steps-deposit-fees-label-color': '#2d2d2d',
    '--theme-voting-registration-steps-description-color': '#2d2d2dcc',
    '--theme-voting-registration-steps-description-highlighted-color':
      '#2d2d2d',
    '--theme-voting-separator-color': 'rgba(45, 45, 45, 0.15)',
  },
  walletImportDialog: {
    '--theme-wallet-import-background-color': 'rgba(255, 185, 35, 0.98)',
    '--theme-wallet-import-button-background-color': 'rgba(45, 45, 45, 0.1)',
    '--theme-wallet-import-button-border-color': '#2d2d2d',
    '--theme-wallet-import-button-text-color': '#2d2d2d',
    '--theme-wallet-import-button-text-color-hover': '#fff',
    '--theme-wallet-import-checkbox-border': '2px solid #ffffff',
    '--theme-wallet-import-checkbox-border-color': '#2d2d2d',
    '--theme-wallet-import-checkbox-border-color-disabled': '#fff',
    '--theme-wallet-import-checkbox-check-bg-color': '#2d2d2d',
    '--theme-wallet-import-checkbox-check-color': '#ffb923',
    '--theme-wallet-import-description-close-color': '#2d2d2d',
    '--theme-wallet-import-description-close-hover-background':
      'rgba(0, 0, 0, 0.1)',
    '--theme-wallet-import-description-color': 'rgba(45, 45, 45, 0.7)',
    '--theme-wallet-import-description-bold-color': '#2d2d2d',
    '--theme-wallet-import-error-color': '#be0b0b',
    '--theme-wallet-import-input-background-color': 'rgba(0, 0, 0, 0.1)',
    '--theme-wallet-import-input-background-color-disabled':
      'rgba(45, 45, 45, 0.05)',
    '--theme-wallet-import-input-border-color': 'rgba(45, 45, 45, 0.3)',
    '--theme-wallet-import-stateFolder-border-color': 'rgba(45, 45, 45, 0.3)',
    '--theme-wallet-import-stateFolder-button-background-color':
      'rgba(45, 45, 45, 0.1)',
    '--theme-wallet-import-stateFolder-button-background-color-hover':
      'rgba(45, 45, 45, 0.05)',
    '--theme-wallet-import-stateFolder-button-background-color-active':
      'rgba(45, 45, 45, 0.12)',
    '--theme-wallet-import-stateFolder-label-color': '#2d2d2d',
    '--theme-wallet-import-title-color': '#2d2d2d',
  },
  walletNotRespondingOverlay: {
    '--theme-wallet-not-responding-background-color': '#fdcd68f5',
    '--theme-wallet-not-responding-button-background-color': '#e4b95e',
    '--theme-wallet-not-responding-button-background-color-hover': '#2d2d2d',
    '--theme-wallet-not-responding-button-border-color': '#2d2d2d',
    '--theme-wallet-not-responding-button-text-color': '#2d2d2d',
    '--theme-wallet-not-responding-button-text-color-hover': '#ffffff',
    '--theme-wallet-not-responding-description-background-color': '#e4b95e',
    '--theme-wallet-not-responding-description-text-color': '#fafbfc',
    '--theme-wallet-not-responding-icon-color': '#2d2d2d',
    '--theme-wallet-not-responding-link-text-color': '#2d2d2d',
    '--theme-wallet-not-responding-title-text-color': '#2d2d2d',
  },
  walletRestoreDialog: {
    '--theme-wallet-restore-dialog-new-label-background-color':
      'rgba(45, 45, 45, 0.1)',
    '--theme-wallet-restore-dialog-new-label-color': '#2d2d2d',
    '--theme-wallet-restore-dialog-step-walletType-hardwareWalletDisclaimer-text-color':
      '#ea4c5b',
  },
  walletSettings: {
    '--theme-wallet-settings-section-separator-color': 'rgba(45, 45, 45, 0.15)',
  },
  widgets: {
    '--theme-widgets-asset-token-fingerprint-background-color':
      'rgba(45,45,45,0.1)',
    '--theme-widgets-asset-token-text-color': '#2d2d2d',
    '--theme-widgets-asset-token-background-color': '#ffffff',
    '--theme-widgets-asset-token-box-shadow': 'rgba(0, 0, 0, 0.25)',
    '--theme-widgets-itemsDropdown-option-label-text-color': '#2d2d2d',
  },
};

const YELLOW_THEME_PARAMS: CreateThemeParams = {
  config: YELLOW_THEME_OUTPUT,
};

export default createTheme(YELLOW_THEME_PARAMS);
