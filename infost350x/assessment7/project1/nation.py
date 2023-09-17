class Nation:
    """
    Class that represents data about a named nation in the United Nations.
    """
    name: str
    continent: str
    population_in_millions: int
    area_in_square_miles: float

    def __init__(self, name: str, continent: str, population: str, area: str):
        self.name = name
        self.continent = continent
        self.population_in_millions = int(float(population) * 1000000)
        self.area_in_square_miles = float(area)

    def __str__(self):
        return 'Continent: {name}\nPopulation: {population:,}\nArea: {area:,} square miles'.format(name=self.continent, population=self.population_in_millions, area=self.area_in_square_miles)

    def popDensity(self):
        """
        Calculate the population density of this nation.
        """
        return self.population_in_millions / self.area_in_square_miles
