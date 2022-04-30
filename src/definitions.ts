export interface PaystackCapacitorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
