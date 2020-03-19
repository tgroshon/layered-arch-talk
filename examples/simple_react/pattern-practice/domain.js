export class Organization {
  constructor(data) {
    this._data = data;
  }
}

export class TrackingDevice {}

export class Hub extends TrackingDevice {
  constructor(data) {
    super();
    this._data = data;
  }
}

export class Beacon extends TrackingDevice {
  constructor(data) {
    super();
    this._data = data;
  }
}

export class Asset {
  attachTracker(device) {
    this.devices.push(device);
  }

  toStruct() {
    return {
      id: this.id,
      devices: this.devices.map(d => d.id)
    };
  }
}

export class Vehicle extends Asset {
  constructor(data) {
    super();
    this._data = data;
  }
}

export class Equipment extends Asset {
  constructor(data) {
    super();
    this._data = data;
  }
}

export class AssetRepository {
  constructor(client) {
    this._client = client;
  }

  async getAllForOrganization(orgId) {
    const rawAssets = await this.client.fetchOrganizationAssets(orgId);
    return rawAssets.map(raw =>
      raw.type === "vehicle" ? new Vehicle(raw) : new Equipment(raw)
    );
  }

  async getVehicle(id) {
    const rawAsset = await this.client.fetchAsset(id);
    if (rawAsset.type !== "vehicle") {
      throw new Error(`Asset ${id} is not a Vehicle`);
    }
    return new Vehicle(rawAsset);
  }

  async getEquipment(id) {
    const rawAsset = await this.client.fetchAsset(id);
    if (rawAsset.type !== "equipment") {
      throw new Error(`Asset ${id} is not an Equipment`);
    }
    return new Equipment(rawAsset);
  }
}

export class TrackingDeviceRepository {
  constructor(client) {
    this._client = client;
  }

  async getAllForOrganization(orgId) {
    const rawDevices = await this.client.fetchOrganizationDevices(orgId);
    return rawDevices.map(raw =>
      raw.type === "beacon" ? new Beacon(raw) : new Hub(raw)
    );
  }

  async getBeacon(id) {
    const rawAsset = await this.client.fetchDevice(id);
    if (rawAsset.type !== "beacon") {
      throw new Error(`Asset ${id} is not a Beacon`);
    }
    return new Beacon(rawAsset);
  }

  async getHub(id) {
    const rawAsset = await this.client.fetchDevice(id);
    if (rawAsset.type !== "hub") {
      throw new Error(`Asset ${id} is not an Hub`);
    }
    return new Hub(rawAsset);
  }
}
