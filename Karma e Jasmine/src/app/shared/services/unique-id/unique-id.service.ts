import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public genereUniqueIdWithPrefix(prefix: string): string {
    if(!prefix || !this.validId.test(prefix)){
        throw Error('Prefix can not be empty')
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidV4();
  }
}
