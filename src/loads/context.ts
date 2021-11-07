import { FileDTO } from './../dtos/file_parse.dto';
import { Strategy } from './strategy';

export class Context {
  /**
   * @type {Strategy} The Context maintains a reference to one of the Strategy
   * objects. The Context does not know the concrete class of a strategy. It
   * should work with all strategies via the Strategy interface.
   */
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public generateBulk(file: FileDTO[]): any[] {
    return this.strategy.doAlgorithm(file);
  }
}
