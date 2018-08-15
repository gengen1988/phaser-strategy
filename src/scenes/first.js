import { Scene } from 'phaser'

var map, layer, tileset

export default class FirstScene extends Scene {

  preload() {
    this.load.tilemapCSV('map', 'assets/map.csv')
    this.load.image('tileset', 'assets/map-tileset.png')
  }

  create() {
    this.cameras.main.setBounds(0, 0, 3392, 100)

    map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 })
    tileset = map.addTilesetImage('tileset')
    layer = map.createStaticLayer(0, tileset, 0, 0)

    this.cameras.main.setZoom(2)
  }

}
