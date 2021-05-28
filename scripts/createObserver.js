function createObserver() {

  return {

    subscribers: [],
    subscribe( subscriber ) {
  
      this.subscribers.push( subscriber ); 
      
    },
    notify( itemName, lastActiveItemName ) { 
      
      this.subscribers.forEach
      ( 
        subscriber => subscriber( itemName, lastActiveItemName ) 
      ); 
    
    }
  
  }
  
}

export default createObserver;