const contacts = require('./contacts');
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const listContacts = await contacts.listContacts();
            return console.table(listContacts);
        case 'get':
            const getContact = await contacts.getContactById(id);
            return console.table(getContact);
        case 'add':
            const newContact = await contacts.addContact( name, email, phone )
            return console.table(newContact);
        case 'remove':
            const deleteContact = await contacts.removeContact(id);
            return console.table(deleteContact);
        default: 
            console.warn('\x1B[31m Unknown action type!');
    }
};

invokeAction(argv);











/*const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'read':
            const allContacts = await contacts.getAll();
            return console.log(allContacts);
        case 'getById':
            const oneContact = await contacts.getById(id);
            return console.log(oneContact);
        case 'add':
            const newContact = await contacts.add({ name, email, phone })
            return console.log(newContact);
        case 'updateById':
            const updateContact = await contacts.updateById(id, { name, email, phone });
            return console.log(updateContact);
        case 'deleteById':
            const deleteContact = await contacts.deleteById(id);
            return console.log(deleteContact);
        default: 
            console.warn('\x1B[31m Unknown action type!');
    }
};

program
    .option('--action, <type>')
    .option('--id, <type>')
    .option('--name, <type>')
    .option('--email, <type>')
    .option('--phone, <type>');

program.parse();
const options = program.opts();
//console.log(options);
invokeAction(options)
*/

//console.log(process.argv);
/*const actionIndex = process.argv.indexOf('--action');
if (actionIndex !== -1) {
    const action = process.argv[actionIndex + 1];
    //console.log(action)
    invokeAction({action})
}*/


//invokeAction({ action: 'read' });
//invokeAction({ action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' })
//invokeAction({action: 'add', name: 'Oleg Bandera', email: 'oleg@ukr.net', phone: '(375) 840-6685'})
//invokeAction({action: 'updateById', id: 'LF-qVP52AZ9bxoK_WcM8y', name: 'Oleg Kolos', email: 'oleg@ukr.net', phone: '(375) 840-6685'})
//invokeAction({action: 'deleteById', id: 'LF-qVP52AZ9bxoK_WcM8y'})


