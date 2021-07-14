import detox from 'detox'
import adapter from 'detox/runners/jest/adapter'
import assignReporter from 'detox/runners/jest/assignReporter'
import specReporter from 'detox/runners/jest/specReporter'
import {detox as config} from '../package.json'
global.detoxCircus.getEnv().addEventsListener(adapter)
global.detoxCircus.getEnv().addEventsListener(assignReporter)
global.detoxCircus.getEnv().addEventsListener(specReporter)
beforeAll(async () => {
  await detox.init(undefined)
})
beforeEach(async () => {
  await adapter.beforeEach()
})
afterAll(async () => {
  await adapter.afterAll()
  await detox.cleanup()
})