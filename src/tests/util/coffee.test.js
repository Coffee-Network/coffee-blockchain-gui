const coffee = require('../../util/coffee');

describe('coffee', () => {
  it('converts number mojo to coffee', () => {
    const result = coffee.mojo_to_coffee(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to coffee', () => {
    const result = coffee.mojo_to_coffee('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to coffee string', () => {
    const result = coffee.mojo_to_coffee_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to coffee string', () => {
    const result = coffee.mojo_to_coffee_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number coffee to mojo', () => {
    const result = coffee.coffee_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string coffee to mojo', () => {
    const result = coffee.coffee_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = coffee.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = coffee.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = coffee.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = coffee.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = coffee.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = coffee.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
