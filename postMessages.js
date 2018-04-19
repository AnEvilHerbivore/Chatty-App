// Need to get local storage

let post = {
    message: 'hi friend',
    time: 'Dec 25, 2018',
    user: 'Kyle Ducharme',
    id: 'post__1'
};

const createMessageArea = () => {
    const area = document.createElement('div');
    const page = document.querySelector('.content');
    area.classList.add('content--messageboard');
    area.setAttribute('id', 'messageBoard')
    page.appendChild(area);
}

const createMessage = (post) => {
    const message = generateMessageStructure();
    const button = generateDeleteButton();
    for (let key in post) {
        if (key === 'id') { }
        else {
            let text = document.createElement('p');
            text.textContent = post[key]
            message.appendChild(text)
        }
    }
    message.appendChild(button)
    postMessage(message);
}

const generateMessageStructure = () => {
    const structure = document.createElement('span');
    structure.classList.add('post')
    return structure;
}

const generateDeleteButton = () => {
    const button = document.createElement('button');
    button.classList.add('button--delete');
    button.setAttribute('id', 'delete')
    button.textContent = 'Delete';
    return button;
}

const postMessage = (post) => {
    const messageBoard = document.querySelector('#messageBoard');
    messageBoard.appendChild(post)
}



createMessageArea();
createMessage(post)