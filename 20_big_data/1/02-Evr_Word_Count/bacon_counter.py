from mrjob.job import MRJob

class Bacon_Count(MRJob):
    def mapper(self, _, line):
        for word in line.split():
            if word.lower() == "bacon":
                yield "bacon", 1
            if word.lower() == "brisket":
                yield "brisket", 1

    def reducer(self, key, values):
        yield key, sum(values)

if __name__ == "__main__":
    Bacon_Count.run()
