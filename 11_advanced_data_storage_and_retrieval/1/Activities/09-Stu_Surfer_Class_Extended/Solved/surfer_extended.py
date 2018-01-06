# Define the Surfer Class
class Surfer():

    # Keep track of surfer count as they are created
    surferCount = 0

    # Constructor
    # --------------------------------------------------------------------------------
    # Initialize the surfer and assign each surfer a new surfer count upon creation
    def __init__(self, name, hometown, rank, wipeouts):
        self.name = name
        self.hometown = hometown
        self.rank = rank
        self.wipeouts = wipeouts
        Surfer.surferCount += 1

    # Class Methods
    # --------------------------------------------------------------------------------
    # Prints what number surfer they are based on when they were created
    def surfer_count(self):
         print("Total surfers shredding waves: " + str(Surfer.surferCount))

    # Prints out simple string
    def speak(self):
        print("Hang loose bruh!")

    # Interpolates based on their attributes
    def biography(self):
        print("My name is " + self.name + ", I am from " + self.hometown + " and am rank #" + str(self.rank) + ", I've wiped out " + str(self.wipeouts) + " times!")

    # Check how many wipeouts and print out a statement
    def cheer(self):
        if self.wipeouts == 0:
            print('I totally rock man, no wipeouts!')
        else:
            print('Bummer bruh, keep on keeping on!')


# Create Surfers
# --------------------------------------------------------------------------------

surfer1 = Surfer('Kelly Slater', 'Cocoa Beach', 1, 0)
print(surfer1.name)
print(surfer1.hometown)
print(surfer1.rank)
print(surfer1.wipeouts)
surfer1.speak()
surfer1.biography()
surfer1.cheer()
surfer1.surfer_count()

surfer2 = Surfer('John Breezy', 'Spring Lake', 2, 10)
print(surfer2.name)
print(surfer2.hometown)
print(surfer2.rank)
print(surfer2.wipeouts)
surfer2.speak()
surfer2.biography()
surfer2.cheer()
surfer2.surfer_count()
