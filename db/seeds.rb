lists = List.create([{ name: 'To do' }, { name: 'Done' }])
Task.create(name: 'come home', list: lists.first)
Task.create(name: 'make coffee', list: lists.first)
