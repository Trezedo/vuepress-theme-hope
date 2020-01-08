import { deepAssign, deepAssignReverse } from '../src/lib/assign';
import { expect } from 'chai';

describe('deepassign', () => {
  it('simple assign', () => {
    const object1 = { a: 1 };
    const object2 = { b: 2 };

    deepAssign(object1, object2);

    expect(object1).to.be.deep.equal({ a: 1, b: 2 });

    const object3 = { a: 'zhangbowang' };
    const object4 = { '%': 'special', b: false };

    deepAssign(object3, object4);

    expect(object3).to.be.deep.equal({
      a: 'zhangbowang',
      '%': 'special',
      b: false
    });
  });

  it('simple assign can cover value', () => {
    const object1 = { a: 1 };
    const object2 = { a: 2 };

    deepAssign(object1, object2);

    expect(object1).to.be.deep.equal({ a: 2 });

    const object3 = { '%': 'zhangbowang', b: true, c: 1 };
    const object4 = { '%': 'special', b: false, d: '2' };

    deepAssign(object3, object4);

    expect(object3).to.be.deep.equal({
      '%': 'special',
      b: false,
      c: 1,
      d: '2'
    });
  });

  it('assign array', () => {
    const object1 = { a: { a: 1 } };
    const object2 = { a: [] };

    deepAssign(object1, object2);

    expect(object1).to.be.deep.equal({ a: [] });

    const object3 = { a: [] };
    const object4 = { a: { a: 1 } };

    deepAssign(object3, object4);

    expect(object3).to.be.deep.equal({ a: { a: 1 } });
  });

  it('assign object', () => {
    const object1 = { a: { a: 1, b: 2 } };
    const object2 = { a: { b: 1, c: 2 } };

    deepAssign(object1, object2);

    expect(object1).to.be.deep.equal({ a: { a: 1, b: 1, c: 2 } });
  });

  it('nest assign', () => {
    const object1 = { a: { a: 1 } };
    const object2 = { a: {} };

    deepAssign(object1, object2);

    expect(object1).to.be.deep.equal({ a: { a: 1 } });

    const object3 = { a: { a: 1, b: 2 }, b: 1 };
    const object4 = { a: { a: 2, c: 3 }, b: [], c: false };

    deepAssign(object3, object4);

    expect(object3).to.be.deep.equal({
      a: { a: 2, b: 2, c: 3 },
      b: [],
      c: false
    });
  });

  it('assign muti object', () => {
    const object1 = { a: { a: 1, b: 2 } };
    const object2 = { a: { b: 1, c: 2 } };
    const object3 = { a: { b: 0 }, b: { a: 1 } };

    deepAssign(object1, object2, object3);

    expect(object1).to.be.deep.equal({ a: { a: 1, b: 0, c: 2 }, b: { a: 1 } });
  });
});

describe('deepassignReverse', () => {
  it('simple assign', () => {
    const object1 = { a: 1 };
    const object2 = { b: 2 };

    deepAssignReverse(object1, object2);

    expect(object2).to.be.deep.equal({ a: 1, b: 2 });

    const object3 = { a: 'zhangbowang' };
    const object4 = { '%': 'special', b: false };

    deepAssignReverse(object3, object4);

    expect(object4).to.be.deep.equal({
      a: 'zhangbowang',
      '%': 'special',
      b: false
    });
  });

  it('simple assign can cover value', () => {
    const object1 = { a: 1 };
    const object2 = { a: 2 };

    deepAssignReverse(object1, object2);

    expect(object2).to.be.deep.equal({ a: 2 });

    const object3 = { '%': 'zhangbowang', b: true, c: 1 };
    const object4 = { '%': 'special', b: false, d: '2' };

    deepAssignReverse(object3, object4);

    expect(object4).to.be.deep.equal({
      '%': 'special',
      b: false,
      c: 1,
      d: '2'
    });
  });

  it('assign array', () => {
    const object1 = { a: { a: 1 } };
    const object2 = { a: [] };

    deepAssignReverse(object1, object2);

    expect(object2).to.be.deep.equal({ a: [] });

    const object3 = { a: [] };
    const object4 = { a: { a: 1 } };

    deepAssignReverse(object3, object4);

    expect(object4).to.be.deep.equal({ a: { a: 1 } });
  });

  it('assign object', () => {
    const object1 = { a: { a: 1, b: 2 } };
    const object2 = { a: { b: 1, c: 2 } };

    deepAssignReverse(object1, object2);

    expect(object2).to.be.deep.equal({ a: { a: 1, b: 1, c: 2 } });
  });

  it('nest assign', () => {
    const object1 = { a: { a: 1 } };
    const object2 = { a: {} };

    deepAssignReverse(object1, object2);

    expect(object2).to.be.deep.equal({ a: { a: 1 } });

    const object3 = { a: { a: 1, b: 2 }, b: 1 };
    const object4 = { a: { a: 2, c: 3 }, b: [], c: false };

    deepAssignReverse(object3, object4);

    expect(object4).to.be.deep.equal({
      a: { a: 2, b: 2, c: 3 },
      b: [],
      c: false
    });
  });

  it('assign muti object', () => {
    const object1 = { a: { a: 1, b: 2 } };
    const object2 = { a: { b: 1, c: 2 } };
    const object3 = { a: { b: 0 }, b: { a: 1 } };

    deepAssignReverse(object1, object2, object3);

    expect(object3).to.be.deep.equal({ a: { a: 1, b: 0, c: 2 }, b: { a: 1 } });
  });
});
