import common from "./i18n/en/common.json";

type Messages = typeof common;

declare global {
  type IntlMessages = Messages;
}
