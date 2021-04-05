import type { Settings } from './';
import { storage } from './_storage';

export async function getSettingsAdvanced(keys: Parameters<typeof storage.get>[0]): Promise<Settings> {
  return storage.get(keys) as Promise<Settings>;
}