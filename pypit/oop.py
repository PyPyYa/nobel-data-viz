class Citizen(object):

    def __init__(self, name, country):
        self.name = name
        self.country = country

    def print_details(self):
        print('Citizen %s from %s' % (self.name, self.country))


class Winner(Citizen):

    def __init__(self, name, country, category, year):
        super(Winner, self).__init__(name, country)
        self.category = category
        self.year = year

    def print_details(self):
        print('Academy Award winner %s from %s, category %s, year %s'
              % (self.name, self.country, self.category, str(self.year)))


c = Citizen('Adele', 'England')
c.print_details()

w = Winner('Adele', 'England', 'Best Original Song', 2013)
w.print_details()