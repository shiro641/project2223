import os
from pathlib import Path

import cv2
import functools
from PIL import Image


def get_dominant_colors(path):
    image = Image.open(path)

    # 缩小图片，减少计算机压力
    small_image = image.resize((80, 80))
    result = small_image.convert(
        "P", palette=Image.ADAPTIVE, colors=10
    )

    # 10个主要颜色的图像

    # 找到主要的颜色
    palette = result.getpalette()
    color_counts = sorted(result.getcolors(), reverse=True)
    colors = list()

    palette_index = color_counts[0][1]
    dominant_color = palette[palette_index * 3: palette_index * 3 + 3]
    # colors.append(tuple(dominant_color))

    # print(colors)
    return tuple(dominant_color)


def getRect(filename):
    global resize
    # filename = 'Website Screenshots.v1-raw.voc/train/4shared_com_png.rf.7da0b596a12c1c1885dbdbc808d9c846.xml'
    file = open(filename, encoding='utf-8')
    str = file.read()
    strlist = str.split('\\n')
    print(strlist)
    file.close()
    file = open(filename, 'w', encoding='utf-8')
    for s in strlist:
        file.write(s + '\n')
    file.close()
    file = open(filename, encoding='utf-8')
    res = []
    while True:
        line = file.readline()
        if not line:
            break
        if line.find('<scale>') != -1:
            start = line.find('<scale>') + 7
            end = line.find('</scale>')
            nub = line[start:end]
            resize = eval(nub)
        if line.find('<object>') != -1:
            obj = {}
            while line.find('</object>') == -1:
                if line.find('<name>') != -1:
                    start = line.find('<name>') + 6
                    end = line.find('</name>')
                    type = line[start:end]
                    obj['class'] = type
                if line.find('<xmin>') != -1:
                    start = line.find('<xmin>') + 6
                    end = line.find('</xmin>')
                    nub = line[start:end]
                    obj['x1'] = int(eval(nub) * resize)
                elif line.find('<xmax>') != -1:
                    start = line.find('<xmax>') + 6
                    end = line.find('</xmax>')
                    nub = line[start:end]
                    obj['x2'] = int(eval(nub) * resize)
                elif line.find('<ymin>') != -1:
                    start = line.find('<ymin>') + 6
                    end = line.find('</ymin>')
                    nub = line[start:end]
                    obj['y1'] = int(eval(nub) * resize)
                elif line.find('<ymax>') != -1:
                    start = line.find('<ymax>') + 6
                    end = line.find('</ymax>')
                    nub = line[start:end]
                    obj['y2'] = int(eval(nub) * resize)
                line = file.readline()
            res.append(obj)
    file.close()
    for item in res:
        print('class:{0}\nx1:{1} y1:{2} x2:{3} y2:{4}'.format(item['class'], item['x1'], item['y1'], item['x2'],
                                                              item['y2']))
    return res


def sortX(e1, e2):
    if e1['x1'] < e2['x1']:
        return -1
    else:
        return 1


def sortY(e1, e2):
    if e1['y1'] < e2['y1']:
        return -1
    else:
        return 1


def sortY_(e1, e2):
    if e1['property']['lower'] < e2['property']['higher']:
        return -1
    else:
        return 1


def division(rects, currentTimes):
    global diviedTimes
    web = []
    rects = sorted(rects, key=functools.cmp_to_key(sortY))
    # 一次扫描（横向）
    while True:
        if len(rects) == 0:
            break

        lower = rects[0]['y1']
        higher = rects[0]['y2']
        left = rects[0]['x1']
        right = rects[0]['x2']
        flex_with_property = {}
        flex = []
        flex.append(rects[0])
        rects.remove(rects[0])
        index = 0
        while True:
            if index == len(rects):
                break
            rect = rects[index]
            if rect['class'] == 'image':
                ok = 1
            # inside
            if rect['y1'] >= lower and rect['y2'] <= higher:
                flex.append(rect)
                if rect['x1'] < left:
                    left = rect['x1']
                if rect['x2'] > right:
                    right = rect['x2']
                rects.remove(rect)
                index -= 1
            # intersect
            elif not (rect['y2'] <= lower or rect['y1'] >= higher):
                if rect['y1'] <= lower:
                    lower = rect['y1']
                if rect['y2'] >= higher:
                    higher = rect['y2']
                flex.append(rect)
                if rect['x1'] < left:
                    left = rect['x1']
                if rect['x2'] > right:
                    right = rect['x2']
                rects.remove(rect)
                index = -1
            index += 1
        ok = 1
        flex = sorted(flex, key=functools.cmp_to_key(sortX))
        flex_property = {'lower': lower, 'higher': higher, 'left': left, 'right': right, 'direction': 'row'}
        flex_with_property['flex'] = flex
        flex_with_property['property'] = flex_property
        web.append(flex_with_property)

    # 二次扫描（纵向）
    for box_with_property in web:
        box = box_with_property['flex']
        # box = sorted(box_with_property['flex'], key=functools.cmp_to_key(sortY))
        lower = box_with_property['property']['lower']
        higher = box_with_property['property']['higher']
        box_tmp = []
        while True:
            if len(box) == 0:
                break
            left = box[0]['x1']
            right = box[0]['x2']
            flex = []
            flex.append(box[0])
            box.remove(box[0])
            index = 0
            while True:
                if index == len(box):
                    break
                rect = box[index]
                # inside
                if rect['x1'] >= left and rect['x2'] <= right:
                    flex.append(rect)
                    box.remove(rect)
                    index -= 1
                elif not (rect['x2'] <= left or rect['x1'] >= right):
                    if rect['x1'] <= left:
                        left = rect['x1']
                    if rect['x2'] >= right:
                        right = rect['x2']
                    flex.append(rect)
                    box.remove(rect)
                    index = -1
                index += 1

            if diviedTimes != currentTimes:
                flex = division(flex, currentTimes + 1)
                flex = sorted(flex, key=functools.cmp_to_key(sortY_))

            else:
                flex = sorted(flex, key=functools.cmp_to_key(sortY))

            flex_property = {'lower': lower, 'higher': higher, 'left': left, 'right': right, 'direction': 'column'}
            flex_with_property = {'flex': flex, 'property': flex_property}
            box_tmp.append(flex_with_property)
        box_with_property['flex'] = box_tmp
        # 注： flex_with_property里装的是一行的信息，box_with_property['flex']里原来装的是控件的矩形信息，
        # 经过纵向扫描后装的是一行中细分的很多个小盒子的信息，小盒子里再装控件的矩形信息
    return web


def drawRect(path, rects):
    image = cv2.imread(path)
    colors = {'button': (255, 102, 0), 'heading': (255, 153, 204), 'link': (153, 153, 255), 'label': (102, 255, 255),
              'text': (51, 204, 51), 'image': (204, 0, 255), 'list': (153, 51, 0), 'searchInput': (0, 0, 102),
              'dog': (204, 255, 255)}
    for rect in rects:
        cv2.rectangle(image, (rect['x1'], rect['y1']), (rect['x2'], rect['y2']), colors[rect['class']], 2)
    cv2.imwrite('out.jpg', image)


def generateCode(web, photoPath, currentDeep):
    global diviedTimes, id, style
    webCode = []
    for i in range(0, len(web)):
        # div 一行
        div = web[i]
        divCode = []
        for rect_with_property in div['flex']:
            if currentDeep != diviedTimes:
                eleCode = generateCode(rect_with_property['flex'], photoPath, currentDeep + 1)
                divCode.append(eleCode)
            # rect_with_property 是一个个的小框框
            else:
                left = rect_with_property['property']['left']
                upper = rect_with_property['property']['lower']
                # 这里flex 是列表！！
                # eleCode 是最里层小框里的代码
                eleCode = {}
                rects = rect_with_property['flex']
                for rect in rects:
                    x1 = rect['x1']
                    x2 = rect['x2']
                    y1 = rect['y1']
                    y2 = rect['y2']
                    if rect['class'] == 'image':
                        name = 'image' + str(id)
                        eleCode[name] = '<img class="{0}" src="./static/assets/{1}.png"></img>'.format(name, name)

                        cutPhoto(photoPath, './assets/' + name + '.png', y1, y2, x1, x2)

                        ComponentStyle = {'name': name,
                                          'content': {'width': x2 - x1, 'height': y2 - y1, 'margin-left': x1 - left,
                                                      'margin-top': y1 - upper}}
                        style.append(ComponentStyle)

                        upper = y2
                    elif rect['class'] == 'button':
                        name = 'button' + str(id)
                        eleCode[name] = '<button class="{0}"> 按钮</button>'.format(name)

                        cutPhoto(photoPath, './assets/tmp1352.png', y1, y2, x1, x2)
                        image_path = r'./assets/tmp1352.png'
                        color = get_dominant_colors(image_path)
                        color = 'rgb' + str(color)
                        ComponentStyle = {'name': name,
                                          'content': {'width': x2 - x1, 'height': y2 - y1, 'margin-left': x1 - left,
                                                      'margin-top': y1 - upper,
                                                      'background-color': color
                                                      }}
                        style.append(ComponentStyle)

                        upper = y2

                    elif rect['class'] == 'heading':
                        name = 'heading' + str(id)
                        eleCode[name] = '<span class="{0}">heading</span>'.format(name)

                        ComponentStyle = {'name': name,
                                          'content': {'text-align': 'center', 'font-weight': 'bold', 'width': x2 - x1,
                                                      'height': y2 - y1, 'margin-left': x1 - left,
                                                      'margin-top': y1 - upper}}
                        style.append(ComponentStyle)

                        upper = y2

                    elif rect['class'] == 'text':
                        name = 'text' + str(id)
                        eleCode[name] = '<span class="{0}">text</span>'.format(name)
                        cutPhoto(photoPath, './assets/tmp1352.png', y1, y2, x1, x2)
                        image_path = r'./assets/tmp1352.png'
                        color = get_dominant_colors(image_path)
                        color = 'rgb' + str(color)
                        ComponentStyle = {'name': name,
                                          'content': {'text-align': 'center', 'width': x2 - x1,
                                                      'height': y2 - y1, 'margin-left': x1 - left,
                                                      'margin-top': y1 - upper, 'background-color': color}}
                        style.append(ComponentStyle)

                        upper = y2

                    elif rect['class'] == 'link':
                        name = 'link' + str(id)
                        eleCode[name] = '<el-link class="{0}">link</el-link>'.format(name)
                        cutPhoto(photoPath, './assets/tmp1352.png', y1, y2, x1, x2)
                        image_path = r'./assets/tmp1352.png'
                        color = get_dominant_colors(image_path)
                        color = 'rgb' + str(color)
                        ComponentStyle = {'name': name,
                                          'content': {'width': x2 - x1,
                                                      'height': y2 - y1, 'margin-left': x1 - left,
                                                      'margin-top': y1 - upper, 'background-color': color}}
                        style.append(ComponentStyle)

                        upper = y2

                    elif rect['class'] == 'label':
                        name = 'label' + str(id)
                        eleCode[name] = '<div class="{0}">label</div>'.format(name)
                        cutPhoto(photoPath, './assets/tmp1352.png', y1, y2, x1, x2)
                        image_path = r'./assets/tmp1352.png'
                        color = get_dominant_colors(image_path)
                        color = 'rgb' + str(color)
                        ComponentStyle = {'name': name,
                                          'content': {'width': x2 - x1, 'text-align': 'center',
                                                      'height': y2 - y1, 'margin-left': x1 - left,
                                                      'margin-top': y1 - upper, 'background-color': color}}
                        style.append(ComponentStyle)

                        upper = y2

                    elif rect['class'] == 'searchInput':
                        name = 'searchInput' + str(id)
                        eleCode[
                            name] = '<SearchBar class="{0}" all-width="{1}" height="{2}" ></SearchBar>' \
                            .format(name, x2 - x1, y2 - y1)

                        ComponentStyle = {'name': name,
                                          'content': {'margin-left': x1 - left,
                                                      'margin-top': y1 - upper}}
                        style.append(ComponentStyle)

                        upper = y2

                    elif rect['class'] == 'list':
                        name = 'list' + str(id)
                        eleCode[
                            name] = '<list class="{0}" :list-height="{1}" :list-width="{2}"></list>' \
                            .format(name, y2 - y1, x2 - x1)

                        ComponentStyle = {'name': name,
                                          'content': {'margin-left': x1 - left,
                                                      'margin-top': y1 - upper}}
                        style.append(ComponentStyle)

                        upper = y2

                    id += 1
                divCode.append(eleCode)
        webCode.append(divCode)
    return webCode


def cutPhoto(photoPath, savePath, x0, x1, y0, y1):
    x0 = x0 if x0 > 0 else 0
    y0 = y0 if y0 > 0 else 0
    img = cv2.imread(photoPath)
    resImg = img[x0:x1, y0:y1]
    cv2.imwrite(savePath, resImg)


def writeCode(code, web, fo, currentDeep, lower_ref, left_ref):
    global diviedTimes, id, style
    for i in range(0, len(code)):
        if i == 3:
            ok = 1
        left = web[i]['property']['left']
        higher = web[i]['property']['higher']
        lower = web[i]['property']['lower']
        right = web[i]['property']['right']
        name = 'div' + str(id)
        id += 1
        fo[0] += '<div class="{0}">\n'.format(name)

        ComponentStyle = {'name': name,
                          'content': {'display': 'flex', 'width': right - left,
                                      'height': higher - lower, 'margin-top': lower - lower_ref,
                                      'margin-left': left - left_ref}}
        style.append(ComponentStyle)

        # web[i]: 第i行，是一个列表
        box_lower_ref = lower
        box_left_ref = left
        for j in range(0, len(web[i]['flex'])):
            # box 是一行中的一个小框
            # web[i]['flex'][j]: web数组第i行flex属性中的第j个小框
            box = web[i]['flex'][j]
            property = box['property']
            box_left = property['left']
            box_right = property['right']
            box_higher = property['higher']
            box_lower = property['lower']

            # 写入小框的代码
            name = 'div' + str(id)
            id += 1
            fo[0] += '<div class="{0}">\n '.format(name)

            ComponentStyle = {'name': name,
                              'content': {'display': 'flex', 'flex-direction': property['direction'],
                                          'width': box_right - box_left,
                                          'height': box_higher - box_lower, 'margin-top': box_lower - box_lower_ref,
                                          'margin-left': box_left - box_left_ref}}
            style.append(ComponentStyle)

            if diviedTimes != currentDeep:
                writeCode(code[i][j], web[i]['flex'][j]['flex'], fo, currentDeep + 1, box_lower, box_left)
            else:
                for eleCode in code[i][j]:
                    fo[0] += code[i][j][eleCode] + '\n'
            fo[0] += '</div>\n'
            box_left_ref = box_right
        fo += '</div>\n'
        lower_ref = higher


def getLayout(path):
    resize = 1
    rects = getRect('input/preview.txt')
    image = cv2.imread(path)
    image = cv2.resize(image, None, fx=resize, fy=resize)
    cv2.imwrite(path, image)
    drawRect(path, rects)
    diviedTimes = 1
    id = 0

    web = division(rects, 0)

    # to test division
    for flex in web:
        print('property is\n' + str(flex['property']))
        for element in flex['flex']:
            print(element)
    ############
    style = []
    code = generateCode(web, 'input/tianmao.png', 0)
    # fo = open('out.txt', "w")
    fo = ['']
    fo[0] += '<template>\n<div class="root">\n'
    writeCode(code, web, fo, 0, 0, 0)
    fo[0] += '</div>\n</template>\n'
    fo[0] += '<style scoped>\n'
    for st in style:
        fo[0] += '.' + st['name'] + '{\n'
        for key in st['content']:
            # fo[0] +=  ('{0}:{1}'.format(key, st['content'][key]))
            if key == 'width' or key == 'height' or key == 'margin-left' or key == 'margin-top':
                fo[0] += '{0}:{1}'.format(key, int(int(st['content'][key])))
                fo[0] += 'px;\n'
            else:
                fo[0] += '{0}:{1}'.format(key, st['content'][key])
                fo[0] += ';\n'
        fo[0] += '}\n'
    fo[0] += '</style>'
    return fo[0]


if __name__ == '__main__':
    # getLayout()
    pass
