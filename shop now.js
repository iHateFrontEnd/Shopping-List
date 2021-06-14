function whenipressCreateList(){

    var typeList1 = document.getElementById('typeList1');

    var typeList2 = document.getElementById('typeList2');

    var typeList3 = document.getElementById('typeList3');

    var typeList4 = document.getElementById('typeList4');

    var typeList5 = document.getElementById('typeList5');

    var typeList6 = document.getElementById('typeList6');

    var typeList7 = document.getElementById('typeList7');

    var typeList8 = document.getElementById('typeList8');

    var typeList9 = document.getElementById('typeList9');

    var typeList10 = document.getElementById('typeList10');

    //saving all the inputs above to local storage
    localStorage.setItem('list1', typeList1.value);
    localStorage.setItem('list2', typeList2.value);
    localStorage.setItem('list3', typeList3.value);
    localStorage.setItem('list4', typeList4.value);
    localStorage.setItem('list5', typeList5.value);
    localStorage.setItem('list6', typeList6.value);
    localStorage.setItem('list7', typeList7.value);
    localStorage.setItem('list8', typeList8.value);
    localStorage.setItem('list9', typeList9.value);
    localStorage.setItem('list10', typeList10.value);
}

function reset(){
    //this function will delete the local storage
    localStorage.removeItem('list1');
    localStorage.removeItem('list2');
    localStorage.removeItem('list3');
    localStorage.removeItem('list4');
    localStorage.removeItem('list5');
    localStorage.removeItem('list6');
    localStorage.removeItem('list7');
    localStorage.removeItem('list8');
    localStorage.removeItem('list9');
    localStorage.removeItem('list10');
}