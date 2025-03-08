'''
file: compile.py
Author: Michael Becker
Description: Compiles all files in the project into a single injectable script which is pasted into app.js
'''

# gather and compile main panel files
with open('index.html', 'r') as f:
    html = f.read().replace('\\', '\\\\')
with open('styles.css', 'r') as f:
    css = f.read().replace('\\', '\\\\')
html = html.replace('<link rel="stylesheet" href="styles.css">', '<style>\n' + css + '\n</style>')
with open('script.js', 'r') as f:
    js = f.read().replace('\\', '\\\\').replace('`', '\\`')
html = html.replace('<script src="script.js"></script>', '<script>\n' + js + '\n</script>')

# gather button file
with open('button.html', 'r') as f:
    button = f.read().replace('\\', '\\\\')

# gather injector files
with open('injector.js', 'r') as f:
    injector = f.read().replace('\\', '\\\\')

# compile all into injector.js
injector = injector.replace('$$button.html$$', button)
injector = injector.replace('$$index.html$$', html)


with open('app.js', 'w') as f:
    f.write(injector)

print("\nDone\n")