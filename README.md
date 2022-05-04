# capacitor-paystack

None yet

## Install

```bash
npm install capacitor-paystack
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`initialize(...)`](#initialize)
* [`addCard(...)`](#addcard)
* [`validateCard()`](#validatecard)
* [`chargeCard()`](#chargecard)
* [`addChargeParameters(...)`](#addchargeparameters)
* [`getCardType()`](#getcardtype)
* [`putChargeMetadata(...)`](#putchargemetadata)
* [`putChargeCustomFields(...)`](#putchargecustomfields)
* [`setChargeEmail(...)`](#setchargeemail)
* [`setChargeAmount(...)`](#setchargeamount)
* [`setAccessCode(...)`](#setaccesscode)
* [`setReference(...)`](#setreference)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### initialize(...)

```typescript
initialize(payload: { publicKey: string; }) => Promise<{ initialized: boolean; }>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`payload`** | <code>{ publicKey: string; }</code> |

**Returns:** <code>Promise&lt;{ initialized: boolean; }&gt;</code>

--------------------


### addCard(...)

```typescript
addCard(payload: { cardNumber: string; expiryMonth: string; expiryYear: string; cvv: string; }) => Promise<any>
```

| Param         | Type                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------ |
| **`payload`** | <code>{ cardNumber: string; expiryMonth: string; expiryYear: string; cvv: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### validateCard()

```typescript
validateCard() => Promise<{ is_valid: boolean; }>
```

**Returns:** <code>Promise&lt;{ is_valid: boolean; }&gt;</code>

--------------------


### chargeCard()

```typescript
chargeCard() => Promise<Transaction>
```

**Returns:** <code>Promise&lt;<a href="#transaction">Transaction</a>&gt;</code>

--------------------


### addChargeParameters(...)

```typescript
addChargeParameters(parameters: { [key: string]: string; }) => Promise<any>
```

| Param            | Type                                    |
| ---------------- | --------------------------------------- |
| **`parameters`** | <code>{ [key: string]: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getCardType()

```typescript
getCardType() => Promise<{ card_type: string; }>
```

**Returns:** <code>Promise&lt;{ card_type: string; }&gt;</code>

--------------------


### putChargeMetadata(...)

```typescript
putChargeMetadata(metadata: { [key: string]: string; }) => Promise<any>
```

| Param          | Type                                    |
| -------------- | --------------------------------------- |
| **`metadata`** | <code>{ [key: string]: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### putChargeCustomFields(...)

```typescript
putChargeCustomFields(customFields: { [key: string]: string; }) => Promise<any>
```

| Param              | Type                                    |
| ------------------ | --------------------------------------- |
| **`customFields`** | <code>{ [key: string]: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setChargeEmail(...)

```typescript
setChargeEmail(payload: { email: string; }) => Promise<any>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`payload`** | <code>{ email: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setChargeAmount(...)

```typescript
setChargeAmount(payload: { amount: string; }) => Promise<any>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`payload`** | <code>{ amount: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setAccessCode(...)

```typescript
setAccessCode(payload: { accessCode: string; }) => Promise<any>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`payload`** | <code>{ accessCode: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setReference(...)

```typescript
setReference(payload: { reference: string; }) => Promise<any>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`payload`** | <code>{ reference: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### Interfaces


#### Transaction

| Prop            | Type                |
| --------------- | ------------------- |
| **`reference`** | <code>string</code> |

</docgen-api>
