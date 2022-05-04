import { registerPlugin } from '@capacitor/core';

import type { PaystackCapacitorPlugin, Transaction } from './definitions';

const PaystackCapacitor = registerPlugin<PaystackCapacitorPlugin>('PaystackCapacitor', {
  web: () => import('./web').then(m => new m.PaystackCapacitorWeb()),

  addChargeParameters(parameters: { [key: string]: string; }): Promise<any> {
    return PaystackCapacitor.addChargeParameters(parameters);
  },

  getCardType(): Promise<{ card_type: string; }> {
    return PaystackCapacitor.getCardType();
  },

  putChargeMetadata(metadata: { [key: string]: string; }): Promise<any> {
    return PaystackCapacitor.putChargeMetadata(metadata);
  },

  putChargeCustomFields(customFields: { [key: string]: string; }): Promise<any> {
    return PaystackCapacitor.putChargeCustomFields(customFields);
  },

  setChargeEmail(payload: {email: string}): Promise<any> {
    return PaystackCapacitor.setChargeEmail(payload);
  },

  setAccessCode(payload: {accessCode: string}): Promise<any> {
    return PaystackCapacitor.setAccessCode(payload);
  },

  setReference(payload: {reference: string}): Promise<any> {
    return PaystackCapacitor.setReference(payload);
  },

  setChargeAmount(payload: {amount: string}): Promise<any> {
    return PaystackCapacitor.setChargeAmount(payload);
  },

  initialize(payload: {publicKey: string}): Promise<{ initialized: boolean; }> {
    return PaystackCapacitor.initialize(payload);
  },

  addCard(payload: { cardNumber: string, expiryMonth: string, expiryYear: string, cvv: string }): Promise<any> {
    const cardData = {
      cardNumber: payload.cardNumber,
      expiryMonth: payload.expiryMonth,
      expiryYear: payload.expiryYear,
      cvv: payload.cvv
    }
    return PaystackCapacitor.addCard(cardData);
  },

  validateCard(): Promise<{ is_valid: boolean; }> {
    return PaystackCapacitor.validateCard();
  },

  chargeCard(): Promise<Transaction> {
    return PaystackCapacitor.chargeCard();
  }
});

export * from './definitions';
export { PaystackCapacitor };
