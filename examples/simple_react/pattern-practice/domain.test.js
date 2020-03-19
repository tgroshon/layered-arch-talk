import * as models from "./domain";

describe("Vehicle", () => {
  it("creatable", () => {
    expect(new models.Vehicle()).toBeInstanceOf(models.Vehicle);
  });
});

describe("Equipment", () => {
  it("creatable", () => {
    expect(new models.Equipment()).toBeInstanceOf(models.Equipment);
  });
});

describe("Hub", () => {
  it("creatable", () => {
    expect(new models.Hub()).toBeInstanceOf(models.Hub);
  });
});

describe("Beacon", () => {
  it("creatable", () => {
    expect(new models.Beacon()).toBeInstanceOf(models.Beacon);
  });
});
