interface SpyInterface<I, O> {
  calledWith: I;
  timesCalled: number;
  call(input: I): O;
  outputMustBeenNull(): void;
  outputMustBeenOutput(): void;
  outputMustBeenThrowError(error?: Error): void;
}

export abstract class SpyAbstract<I, O> implements SpyInterface<I, O> {
  private input: I = null as any;
  private output: O = null as any;
  private count: number = 0;
  private error: Error = new Error();
  private returnNull: boolean = false;
  private throwError: boolean = false;

  constructor({ output, error }: { output: O; error?: Error }) {
    this.output = output;

    if (error) this.error = error;
  }

  get calledWith(): I {
    return this.input;
  }

  get timesCalled(): number {
    return this.count;
  }

  outputMustBeenNull(): void {
    this.returnNull = true;
  }

  outputMustBeenThrowError(error?: Error): void {
    this.returnNull = false;
    this.throwError = true;

    if (error) this.error = error;
  }

  outputMustBeenOutput(): void {
    this.returnNull = false;
    this.throwError = false;
  }

  call(input: I): O {
    this.count++;
    this.input = input;

    if (this.returnNull) return null as any;
    if (this.throwError) throw this.error;

    return this.output;
  }
}
