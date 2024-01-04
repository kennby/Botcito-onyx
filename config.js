import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['51901447095', 'kennn', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['400359205']
global.suittag = ['994400359205']
global.mods = []
global.suittag = ['5219993404349'];
global.prems = ['51995386439'];

global.packname = '𝙾𝙽𝚈𝚇 𝙱𝙾𝚃'
global.author = '𝙾𝙽𝚈𝚇 𝙺𝙴𝙽𝙽'
global.wm = '© 𝙾𝙽𝚈𝚇 𝙺𝙴𝙽𝙽'
global.wm2 = '𝙾𝙽𝚈𝚇𝚇 : 𝗕𝗈𝗍'
global.azami = '𝙾𝙽𝚈𝚇𝚇'
global.cb = '𝙾𝙽𝚈𝚇𝚇'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '𝙾𝙽𝚈𝚇 𝙱𝙾𝚃 𝙼𝙳'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

