import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['51946512638', 'kennn', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['400359205']
global.suittag = ['994400359205']
global.mods = []
global.suittag = ['5219993404349'];
global.prems = ['51995386439'];

global.packname = 'onyx MD'
global.author = 'onyx MD'
global.wm = '© onyx-MD'
global.wm2 = 'onyx : 𝗕𝗈𝗍'
global.azami = 'onyx'
global.cb = 'onyx-MD'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '59169082575'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
