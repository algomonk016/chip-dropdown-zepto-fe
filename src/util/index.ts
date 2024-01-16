import { identicon } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

export const generateIdenticon = (seed: string): string => {
  const avatar = createAvatar(identicon, {
    seed,
  });
  
  return avatar.toDataUriSync();
};