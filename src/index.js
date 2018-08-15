import { Game } from 'phaser'
import { GameAnalytics } from 'gameanalytics'

function start(config) {
  if (config.gameAnalytics.enabled) {
    GameAnalytics.setEnabledInfoLog(config.gameAnalytics.enabledInfoLog)
    GameAnalytics.initialize(config.gameAnalytics.gameKey, config.gameAnalytics.secretKey)
  }
  const ctx = require.context('./scenes', true, /\.js$/)
  config.phaser.scene = importAll(ctx)
  return new Game(config.phaser)
}

function importAll(ctx) {
  return ctx.keys().map(key => ctx(key).default)
}

start(require('../game-config.yaml'))
