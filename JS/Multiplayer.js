import { joinRoom, selfId } from 'https://cdn.skypack.dev/trystero/ipfs';
const config = {appId: 'CARTChatDemo'};
const room = joinRoom(config, 'lobby');
const [sendName, getName] = room.makeAction('name');
const [sendMsg, getMsg] = room.makeAction('message');

const idsToNames = {}; // map of peer ids to names
const nameInput = document.getElementById('nameInput');
const nameButton = document.getElementById('nameButton');

let myName = `Anonymouse`; // name based on peer id
nameInput.placeholder = `${myName} #${selfId.substring(0, 4)}`; // update placeholder
console.log(`My peer id is ${selfId} and my name is ${myName}`);


// random hash generator for future use
function randomHash() {
  return Math.random().toString(36).substring(2, 15);
}


// listen to peer activity
room.onPeerJoin( (peerId) => {
    console.log(`${peerId} joined`);
    sendName(`${myName} #${selfId.substring(0, 4)}`, peerId); // tell newcomers our name
    //appendMessage('', peerId);
});

room.onPeerLeave( (peerId) => {
    console.log(`${idsToNames[peerId] || 'a weird stranger'} left`);
    updatePeers(); // update peer list
});

// receive peer names
getName((name, peerId) => {
  (idsToNames[peerId] = name);
  // console.log(
  //   `${peerId} changed name to ${name}`
  //   )
    // appendMessage(`${idsToNames[peerId]} changed name to ${name}.`, peerId);
    updatePeers(); // update peer list
});

function updatePeers() { // update peer list
  const peerList = document.getElementById('peers');
  const peerCount = document.getElementById('peerCount');
  peerList.innerHTML = ''; // clear list
  peerCount.innerHTML = room.getPeers().length; // update count
  room.getPeers().forEach((peerId) => {
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(idsToNames[peerId] || peerId));
    peerList.appendChild(listItem);
  });
}

// message sending
const messageInput = document.getElementById('messageInput');
const messageButton = document.getElementById('messageButton');

nameButton.addEventListener('click', () => {
  console.log(`Changing name to ${nameInput.value}`); // log name change
  myName = nameInput.value; // update name
  sendName(`${myName} #${selfId.substring(0, 4)}`); // tell everyone our new name
  nameInput.placeholder = `${myName} #${selfId.substring(0, 4)}`; // update placeholder
  nameInput.value = ''; // clear input
  console.log(idsToNames);
});

messageButton.addEventListener('click', () => {
  if(messageInput.value === '') {
    return // don't send empty messages
  } else {
    sendMsg(messageInput.value);
    appendMessage(messageInput.value, selfId);
  }
  messageInput.value = ''; // clear input
})

// message receiving
const messageList = document.getElementById('chat');

function appendMessage(message, peerId) {
  const listItem = document.createElement('li');
  let text = '';
  if(peerId === selfId) { // if message is from self
    listItem.classList.add('self');
    text = `Me: ${message}`;
  } else if(idsToNames[peerId] === undefined) { //a new peer joined
    listItem.classList.add('join');
    text = `#${peerId.substring(0,4)} joined the chat.`;
  } else { // if message is from someone else
    listItem.classList.add('other');
    text = `${idsToNames[peerId]}: ${message}`;
  }
  listItem.appendChild(document.createTextNode(text));
  messageList.appendChild(listItem);
}

getMsg((message, peerId) => {
  appendMessage(message, peerId);
});

function sendViaForce(inp){
  sendMsg(inp);
  appendMessage(inp, selfId);
}