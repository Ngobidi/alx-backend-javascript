export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Classes beyound Building must override evacuation-Warning-Message',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
