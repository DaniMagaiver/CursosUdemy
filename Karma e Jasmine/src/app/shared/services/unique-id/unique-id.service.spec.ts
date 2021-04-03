import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.genereUniqueIdWithPrefix.name} 
  should generate id when called with prefix`, () => {
    const id = service.genereUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.genereUniqueIdWithPrefix.name} 
  should not generate duplicated id when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.genereUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds} 
  should return the number of generated is when called`, () => {
    service.genereUniqueIdWithPrefix('app');
    service.genereUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.genereUniqueIdWithPrefix.name}
  should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '', '0'];
      emptyValues.forEach(value => {
        expect(() => service.genereUniqueIdWithPrefix(value)).withContext(`Empty value "${value}"`).toThrow();
      })
  })

});
