function snapCracklePrime (maxValue) {
    string = ""
    for ( let i=1; i <= maxValue; i++ ) {
        
        

        if (i%2==1 && i%5==0) {
            string += "SnapCrackle"
                if ( i%2!=0 && i%3!=0) {string += "Prime"}
            
        }

         else if  (i%2==1) {
            string += "snap"
                if ( i==3 ){  string += "Prime"}
                if ( i%2==0 && i%3==0) {string += "Prime"}
            
        }
         else if (i%5==0) {
            string += "crackle"
                if ( i%2==0 && i%3==0) {string += "Prime"}
            
        }
        // else { string += i }

        else if (i==2){ 
            string += "Prime"
            
        }
        
        else if ( i%2!=0 && i%3!=0) {
            string += "Prime"
            }
        else { 
            string +=i
            
        }

        
        string += `, `
        
    }
    
    return string
}
console.log(snapCracklePrime(15))