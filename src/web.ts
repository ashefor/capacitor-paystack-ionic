import { WebPlugin } from '@capacitor/core';

import type { PaystackCapacitorPlugin } from './definitions';

export class PaystackCapacitorWeb extends WebPlugin implements PaystackCapacitorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
