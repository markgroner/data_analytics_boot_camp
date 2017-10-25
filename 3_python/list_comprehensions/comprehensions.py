def comprehensions():
    name_list = []
    for _ in range(5):
        name_list.append(input('Enter a name: '))
    print(name_list)
    lower_name_list = [name.lower() for name in name_list]
    print(lower_name_list)
    title_name_list = [name.title() for name in name_list]
    print(title_name_list)
    wedding_name_list = ["Dear %s, please come to the wedding this Saturday!" % (name.title()) for name in name_list]
    print(wedding_name_list)
    for guest in wedding_name_list:
        print(guest)



comprehensions()
