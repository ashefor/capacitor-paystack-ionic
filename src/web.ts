import { WebPlugin } from '@capacitor/core';

import type { PaystackCapacitorPlugin, Transaction } from './definitions';

export class PaystackCapacitorWeb extends WebPlugin implements PaystackCapacitorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async initialize(_payload: {publicKey: string}): Promise<{ initialized: boolean; }> {
    throw new Error("Method not implemented.");
  }
  async validateCard(): Promise<{ is_valid: boolean; }> {
    throw new Error("Method not implemented.");
  }
  async chargeCard(): Promise<Transaction> {
    throw new Error("Method not implemented.");
  }

  async addCard(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async addChargeParameters(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async getCardType(): Promise<{card_type: string}> {
    throw new Error("Method not implemented.");
  }

  async putChargeMetadata(): Promise<{card_type: string}> {
    throw new Error("Method not implemented.");
  }

  async putChargeCustomFields(): Promise<{card_type: string}> {
    throw new Error("Method not implemented.");
  }

  async setChargeEmail(_payload: {email: string}): Promise<any>{
    throw new Error("Method not implemented.");
  };
  async setChargeAmount(_payload: {amount: string}): Promise<any>{
    throw new Error("Method not implemented.");
  };
  async setAccessCode(_payload: {accessCode: string}): Promise<any>{
    throw new Error("Method not implemented.");
  };

  async setReference(_payload: {reference: string}): Promise<any>{
    throw new Error("Method not implemented.");
  };
}
