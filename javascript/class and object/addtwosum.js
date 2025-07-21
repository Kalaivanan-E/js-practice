
var twosum = function(num, target){
    for(i=0; i<num.length; i++){
        for(j=i+1; j<num.length; j++){
            if(num[i] + num[j] == target){
                return [i ,j]
            }
        }
    }
}

num = [1,2,3,4,5,6,]
target = 5

