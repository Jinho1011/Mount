import os

filenames = []


def to_camel_case(snake_str):
    components = snake_str.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])


def remove_space(s):
    return s.replace(' ', '')


def check_duplicate(listOfElems):
    if len(listOfElems) == len(set(listOfElems)):
        return False
    else:
        return True


for (path, dir, files) in os.walk("./assets"):
    for filename in files:
        ext = os.path.splitext(filename)[-1]
        if ext == '.svg':
            item = {}

            pathName = path.split('./assets/')
            if len(pathName) > 1:
                item['path'] = '../../assets/' + pathName[1] + '/' + filename
                filename = pathName[1] + '_' + filename
            else:
                item['path'] = '../../assets/' + filename

            filename = filename.replace(' ', '')
            filename = filename.replace('(', '')
            filename = filename.replace(')', '')
            item['name'] = filename.capitalize()
            filenames.append(item)

filenames = sorted(filenames, key=lambda d: d['name'])

for f in filenames:
    print("import " + f['name'].split('.svg')
          [0] + " from '" + f['path'] + "'")

for f in filenames:
    print("export const " + f['name'].split('.svg')
          [0] + "Svg = props => <" + f['name'].split('.svg')
          [0] + " {...props} />")
