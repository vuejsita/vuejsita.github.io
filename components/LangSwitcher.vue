<script setup lang="ts">
import { LanguageIcon } from "@heroicons/vue/24/outline";
import type i18nConfig from "@/lang/i18n.config";

type LocaleKeys = keyof Awaited<ReturnType<typeof i18nConfig>>["messages"];

const { locale: currentLocale, setLocale, t } = useI18n();
const onSelectLocale = (localeCode: LocaleKeys) => {setLocale(localeCode)};
const isLocaleActive = (localeCode: LocaleKeys) => localeCode === currentLocale.value;

const localesMap: { [key in LocaleKeys]: { label: string; code: LocaleKeys } } =
  {
    it: {
      label: "it",
      code: "it",
    },
    "en-US": {
      label: "en-US",
      code: "en-US",
    },
  };

const localeItemClasses = {
  Default: "mb-1 last:mb-0",
  Active: "bg-primary-100 text-primary-900",
  Inactive: "hover:bg-primary-50",
};

const localeOptions = computed(() => [
  Object.values(localesMap).map(({ code, label }) => ({
    label: t(`langs.${label}`),
    click: () => onSelectLocale(code),
    class: `${localeItemClasses.Default} ${
      isLocaleActive(code)
        ? localeItemClasses.Active
        : localeItemClasses.Inactive
    }`,
  })),
]);
</script>

<template>
  <UDropdown
    :items="localeOptions"
    :popper="{ placement: 'bottom' }"
    :ui="{ width: 'w-28' }"
  >
    <UButton
      variant="ghost"
      color="primary"
    >
      <LanguageIcon class="h-6 w-6" />
    </UButton>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>
    </template>
  </UDropdown>
</template>
