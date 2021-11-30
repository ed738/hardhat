import { Block } from "@ethereumjs/block";
import Common from "@ethereumjs/common";
import { BlockchainInterface } from "@ethereumjs/blockchain";
import { BN } from "ethereumjs-util";

import { FilterParams } from "../node-types";
import { RpcLogOutput, RpcReceiptOutput } from "../output";

export interface HardhatBlockchainInterface extends BlockchainInterface {
  addBlock(block: Block): Promise<Block>;
  addTransactionReceipts(receipts: RpcReceiptOutput[]): void;
  reserveBlocks(count: BN, interval: BN, common: Common): void;
  isReservedBlock(numberOrLatest: BN | "latest"): boolean;
  fulfillBlockReservation(numberOrLatest: BN | "latest", common: Common): Block;
  deleteLaterBlocks(block: Block): void;
  getBlockByTransactionHash(transactionHash: Buffer): Promise<Block | null>;
  getLatestBlock(): Promise<Block>;
  getLatestBlockNumber(): BN;
  getLogs(filterParams: FilterParams): Promise<RpcLogOutput[]>;
  getTotalDifficulty(blockHash: Buffer): Promise<BN>;
  getTransactionReceipt(
    transactionHash: Buffer
  ): Promise<RpcReceiptOutput | null>;
  getBaseFee(): Promise<BN>;
}
