// Need to get local storage

let post = {
    user: 'Kyle Ducharme',
    message: 'This is a sample message posting',
    time: 'Dec 25, 2018',
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
    const message = generateMessageStructure(post);
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
    applyStyling();
}

const applyStyling = () => {
    const allPosts = document.querySelectorAll('.post')
    
    allPosts.forEach(detail => {
        const name = detail.firstChild
        name.classList.add('name')
    })
}

const generateMessageStructure = (post) => {
    const structure = document.createElement('span');
    structure.classList.add('post')
    structure.setAttribute('id', `${post.id}`)
    return structure;
}

const generateDeleteButton = () => {
    const button = document.createElement('button');
    button.classList.add('button--delete');
    button.setAttribute('id', 'delete')
    button.textContent = 'Delete';
    button.addEventListener('click', deleteMessage)
    return button;
}

const deleteMessage = (e) => {
    const messageBoard = document.querySelector('#messageBoard');
    const message = e.path[1];
    messageBoard.removeChild(message)
}

const postMessage = (post) => {
    const messageBoard = document.querySelector('#messageBoard');
    messageBoard.appendChild(post)
}

createMessageArea();
createMessage(post)