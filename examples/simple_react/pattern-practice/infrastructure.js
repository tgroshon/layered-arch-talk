export const MemoryClient = {
  nextAssetId: 11,
  nextDeviceId: 14,

  organizations: [
    { id: 1, name: "Trucking Corp." },
    { id: 2, name: "Construction LLC." },
    { id: 3, name: "Plumbers Inc." }
  ],

  assets: [
    { id: 1, type: "vehicle", organizationId: 1, devices: [] },
    { id: 2, type: "vehicle", organizationId: 1, devices: [] },
    { id: 3, type: "vehicle", organizationId: 2, devices: [] },
    { id: 4, type: "vehicle", organizationId: 1, devices: [] },
    { id: 5, type: "equipment", organizationId: 1, devices: [] },
    { id: 6, type: "equipment", organizationId: 2, devices: [] },
    { id: 7, type: "equipment", organizationId: 1, devices: [] },
    { id: 8, type: "equipment", organizationId: 3, devices: [] },
    { id: 9, type: "equipment", organizationId: 1, devices: [] },
    { id: 10, type: "vehicle", organizationId: 3, devices: [] }
  ],

  devices: [
    { id: 1, type: "beacon", organizationId: 1 },
    { id: 2, type: "hub", organizationId: 1 },
    { id: 3, type: "beacon", organizationId: 1 },
    { id: 4, type: "beacon", organizationId: 2 },
    { id: 5, type: "beacon", organizationId: 3 },
    { id: 6, type: "beacon", organizationId: 2 },
    { id: 7, type: "hub", organizationId: 2 },
    { id: 8, type: "hub", organizationId: 1 },
    { id: 9, type: "hub", organizationId: 3 },
    { id: 10, type: "hub", organizationId: 1 },
    { id: 11, type: "hub", organizationId: 1 },
    { id: 12, type: "hub", organizationId: 1 },
    { id: 13, type: "hub", organizationId: 1 }
  ],

  async createAsset(data) {
    this.assets.push({ ...data, id: this.nextAssetId++ });
  },

  async updateAsset(id, data) {
    Object.assign(
      this.assets.find(a => a.id === id),
      data
    );
  },

  async createDevice(data) {
    this.devices.push({ ...data, id: this.nextDeviceId++ });
  },

  async updateDevice(id, data) {
    return Object.assign(
      this.devices.find(d => d.id === id),
      data
    );
  },

  async fetchOrganization(id) {
    return this.organizations.find(org.id === id);
  },

  async fetchAsset(id) {
    return this.assets.find(asset.id === id);
  },

  async fetchOrganizationAssets(orgId) {
    return this.assets.filter(asset.organizationId === orgId);
  },

  async fetchDevice(id) {
    return this.devices.find(dev.id === id);
  },

  async fetchOrganizationDevices(orgId) {
    return this.devices.filter(device.organizationId === orgId);
  }
};
