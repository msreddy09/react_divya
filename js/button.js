class Button {

   constructor(text) {
      this.text = text;
      this.el = null;
      this.roundedCorners = false
   }

   createButton() {
      let btnEl = document.createElement('button');
      let buttonText = document.createTextNode(this.text);
      btnEl.appendChild(buttonText);
      this.el = btnEl;
   }

   render(){
      document.write(this.el)
   }

}


class PrimaryButton extends Button {
   constructor(text, roundedCorners = false){
      super(text)
      this.roundedCorners = roundedCorners;
   }
   
   createPrimary() {
      this.createButton();
      this.el.setAttribute('class', 'primary');
      if(this.roundedCorners){
         this.el.classList.add('rnd-brdr');
      }

   }
   show() {
      this.createPrimary();
      document.getElementById('buttoncontainer').appendChild(this.el);
   }
}


class SecondaryButton extends Button {
   constructor(text, roundedCorners){
      super(text)
      this.roundedCorners = roundedCorners || false;
   }
   
   createSecondaryButton() {
      this.createButton();
      this.el.setAttribute('class', 'secondary'); //this.el = <button>Text Me</button> => <button class='secondary'>Text Me </button>
      if(this.roundedCorners){
         this.el.classList.add('rnd-brdr');
      }
   }
   show() {
      this.createSecondaryButton();
      document.getElementById('buttoncontainer').appendChild(this.el);
   }
}

const pb1 = new PrimaryButton('Primary Button');
const sb1 = new SecondaryButton('Secondary Button', true);
pb1.show();
sb1.show();
