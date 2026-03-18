export type { OpenClawConfig } from "../config/config.js";
export type { SecretInput } from "../config/types.secrets.js";
export type { ChannelSetupAdapter } from "../channels/plugins/types.adapters.js";
export type { ChannelSetupDmPolicy } from "../channels/plugins/setup-wizard-types.js";
export type { ChannelSetupWizard } from "../channels/plugins/setup-wizard.js";

export { formatCliCommand } from "../cli/command-format.js";
export { detectBinary } from "../plugins/setup-binary.js";
export { installSignalCli } from "../plugins/signal-cli-install.js";
export { formatDocsLink } from "../terminal/links.js";
export { DEFAULT_ACCOUNT_ID, normalizeAccountId } from "../routing/session-key.js";
export { hasConfiguredSecretInput } from "../config/types.secrets.js";
export {
  buildSingleChannelSecretPromptState,
  createTopLevelChannelAllowFromSetter,
  createTopLevelChannelDmPolicy,
  createTopLevelChannelGroupPolicySetter,
  mergeAllowFromEntries,
  patchTopLevelChannelConfigSection,
  promptParsedAllowFromForAccount,
  promptSingleChannelSecretInput,
  splitSetupEntries,
} from "../channels/plugins/setup-wizard-helpers.js";
