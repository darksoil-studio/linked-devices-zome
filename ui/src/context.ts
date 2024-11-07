import { createContext } from '@lit/context';

import { LinkedDevicesStore } from './linked-devices-store.js';

export const linkedDevicesStoreContext = createContext<LinkedDevicesStore>(
	'linked_devices/store',
);
