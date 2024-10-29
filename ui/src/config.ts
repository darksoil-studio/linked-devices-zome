export interface LinkedDevicesConfig {
	linkDevicePasscodeLength: number;
}

export const defaultLinkedDevicesConfig: LinkedDevicesConfig = {
	linkDevicePasscodeLength: 4,
};

export const TTL_CAP_GRANT = 60 * 1000; // 1 minute
