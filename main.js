console.log('Hello World!');
let screen = document.querySelector('.screen');
mode = 'calc'
function insert(num) {
  screen.value += num; 
  if (mode =='equal' ) {
    screen.value = '';
    screen.value += num;
    mode = 'calc'
  };
};
function clr() {
  screen.value = '' ;
  if (mode = 'equal') {
    screen.value = '';
    mode = 'calc' 
  };
};
function del() {
  screen.value = screen.value
       .slice(0, -1);
  if(mode = 'equal') {
    screen.value = '';
  };
}; 
function calc() {
  try {
    /* calcul */
      screen.value = eval(screen.value)
  } catch (e) {
    screen.value = 'Error'
  }
}