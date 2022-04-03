import { EthAddress } from '../address';
import { EthereumProvider } from './ethereum_provider';
import { TxHash } from './tx_hash';

export class EthereumRpc {
  constructor(private provider: EthereumProvider) {}

  public async getChainId() {
    const result = await this.provider.request({ method: 'eth_chainId' });
    return Number(result);
  }

  public async getAccounts() {
    const result: string[] = await this.provider.request({ method: 'eth_accounts' });
    return result.map(EthAddress.fromString);
  }

  public async getTransactionCount(addr: EthAddress) {
    const result = await this.provider.request({
      method: 'eth_getTransactionCount',
      params: [addr.toString(), 'latest'],
    });
    return result;
  }

  /**
   * TODO: Return proper type with converted properties.
   */
  public async getTransaction(txHash: TxHash) {
    const result = await this.provider.request({ method: 'eth_getTransactionByHash', params: [txHash.toString()] });
    return result;
  }
}
