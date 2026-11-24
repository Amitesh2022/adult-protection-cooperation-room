import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDeliveryStore } from './store'
describe('adult protection cooperation store', () => { beforeEach(() => setActivePinia(createPinia())); it('loads protection cases from the Java API', async () => { vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 1, title: 'Belgian urgent adult safeguard', owner: 'Brussels Central Authority', status: 'Approved', priority: 'Low' }] })); const store = useDeliveryStore(); await store.load(); expect(store.offers).toHaveLength(1); expect(store.approvedShare).toBe(100) }) })
