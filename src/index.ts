import { decorate, observable } from 'mobx';

class A {
  foo?: object;
}

decorate(A, {
  foo: observable.ref,
});
