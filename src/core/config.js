const config = {
  /**
   * Game configuration
   *
   * All variables here tweak the design and UI of the game
   * so please be very careful when updating. Assets and images
   * are listed here as well -- so double check dimensions.
   */
  name: 'navarra',
  version: '0.0.1',
  map: {
    tileset: { // How big is the tileset?
      width: 768,
      height: 800,
      tile: { // How big is each tile?
        width: 0,
        height: 0,
      },
      // eslint-disable-next-line
      blocked: [],
    },
    viewport: { // How big will our view be?
      x: 15,
      y: 10,
    },
    size: { // How big will our map be?
      x: null,
      y: null,
    },
    player: {
      x: 7,
      y: 5,
    },
  },
};

module.exports = config;
