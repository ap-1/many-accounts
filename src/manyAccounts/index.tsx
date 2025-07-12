import { ExtensionWebExports } from "@moonlight-mod/types";

// https://moonlight-mod.github.io/ext-dev/webpack/#patching
export const patches: ExtensionWebExports["patches"] = [
  {
    find: '"switch-accounts-modal"',
    replace: {
      match: "=5",
      replacement: "=1/0"
    }
  }
];
