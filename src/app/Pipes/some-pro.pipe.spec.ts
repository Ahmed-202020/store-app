import { SomeProPipe } from './some-pro.pipe';

describe('SomeProPipe', () => {
  it('create an instance', () => {
    const pipe = new SomeProPipe();
    expect(pipe).toBeTruthy();
  });
});
