export default class Country {
  constructor(obj) {
    this.name = obj?.name?.common || "";
    this.latlng = obj?.latlng || [];
    this.native = Object.values(obj?.name?.nativeName || [])[0]?.official || "";
    this.id = obj?.cca2 || 0;
    this.flags = obj?.flags?.png || "";
    this.flagsBig = obj?.flags?.svg || "";
    this.capital = obj?.capital?.[0] || "";
    this.population = obj?.population.toLocaleString() || 0;
    this.region = obj?.region || "";
    this.subRegion = obj?.subregion || "";
    this.borders = obj?.borders || [];
    this.language = Object.values(obj?.languages || [])[0] || "";
    this.tld = obj?.tld?.[0] || "";
  }
}
