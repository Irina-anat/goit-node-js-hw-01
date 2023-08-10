const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'db/contacts.json');

const { nanoid } = require('nanoid');

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
};
 
async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    return result || null;
};

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index === -1) {
    return null;
  };
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 3));
  return result;
};

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 3));
  return newContact;
};


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
};












/*Зроби імпорт модулів fs (у версії, яка працює з промісами - fs/promises) і path для роботи з файловою системою.
Створи змінну contactsPath і запиши в неї шлях до файлу contacts.json. Для складання шляху використовуй методи модуля path.
Додай функції для роботи з колекцією контактів. У функціях використовуй модуль fs та його методи readFile() і writeFile().
// contacts.js


 Розкоментуй і запиши значення
 const contactsPath = ;
 

const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'db/contacts.json');
//console.log(contactsPath)
const { nanoid } = require('nanoid');


/*const getAll = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}
 

const getById = async (id) => {
    const contacts = await getAll();
    const result = contacts.find(contact => contact.id === id);
    return result || null;

}

const deleteById = async (id) =>{
  const contacts = await getAll();
  const index = contacts.findIndex(contact => contact.id === id);
  if (index === -1) {
    return null;
  };
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 3));
  return result;
};


  const add = async (data) => {
  const contacts = await getAll();
  const newContact = {
    id: nanoid(),
    ...data,
  }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 3));
  return newContact;
};

const updateById = async (id, data) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 3));
  return contacts[index];
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById
};*/

