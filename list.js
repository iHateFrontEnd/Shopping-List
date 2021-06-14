function viewList(){
    //this is the div for the lists
    let forList = document.createElement('div');
    forList.setAttribute('id', 'forList');  
    forList.setAttribute('class', 'forList');
    document.body.appendChild(forList);

    //this is just a heading
    var message = document.createElement('h2');
    message.setAttribute('id', 'message');
    message.setAttribute('class', 'message');
    message.innerHTML = 'This is your list that you made:- '
    forList.appendChild(message);

    //making the ul list for displaying the lists
    //this is the ul list 
    var mainUl = document.createElement('ul');
    mainUl.setAttribute('id', 'mainUl');
    mainUl.setAttribute('class', 'mainUl');
    forList.appendChild(mainUl);

    // these are the li's for the ul list
    var list1 = document.createElement('li');
    list1.innerHTML = localStorage.getItem('list1');
    mainUl.appendChild(list1);

    var list2 = document.createElement('li');
    list2.innerHTML = localStorage.getItem('list2');
    mainUl.appendChild(list2);

    var list3 = document.createElement('li');
    list3.innerHTML = localStorage.getItem('list3');
    mainUl.appendChild(list3);

    var list4 = document.createElement('li');
    list4.innerHTML = localStorage.getItem('list4');
    mainUl.appendChild(list4);

    var list5 = document.createElement('li');
    list5.innerHTML = localStorage.getItem('list5');
    mainUl.appendChild(list5);

    var list6 = document.createElement('li');
    list6.innerHTML = localStorage.getItem('list6');
    mainUl.appendChild(list6);

    var list7 = document.createElement('li');
    list7.innerHTML = localStorage.getItem('list7');
    mainUl.appendChild(list7);

    var list8 = document.createElement('li');
    list8.innerHTML = localStorage.getItem('list8');
    mainUl.appendChild(list8);

    var list9 = document.createElement('li');
    list9.innerHTML = localStorage.getItem('list9');
    mainUl.appendChild(list9);

    var list10 = document.createElement('li');
    list10.innerHTML = localStorage.getItem('list10');
    mainUl.appendChild(list10);

    var webpage = document.getElementById('webpage');
    webpage.style.display = 'none';

    var back = document.getElementById('back1');
    back.style.display = 'inline';
}