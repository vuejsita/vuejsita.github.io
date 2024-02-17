import IT from "./it";
import EN from "./en-US";

export default defineI18nConfig(() => ({
  fallbackLocale: "it",
  legacy: false,
  messages: {
    it: IT,
    "en-US": EN,
  },
}));
