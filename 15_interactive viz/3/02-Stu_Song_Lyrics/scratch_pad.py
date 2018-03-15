from lyrics import get_lyrics

lyrics = get_lyrics()
data = dict(lyrics)
labels, values = zip(*lyrics.items())
print(labels)
print(values)
print(data)
