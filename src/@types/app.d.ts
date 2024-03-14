declare interface MainTemplate {
  children: any;
  className: string;
}

declare interface IAlertSite {
  AlertSite: {
    open: {
      status: any;
      go: boolean;
    };
    vertical: string;
    horizontal: string;
    message: string;
  };
}

declare interface Modals {
  Modals: {
    modalRegister: boolean;
    modalLogin: boolean;
    resetPasswordEmail: boolean;
    modalSaveNewPassword: boolean;
    modalCreateUsername: boolean;
    chat: boolean;
  };
}
