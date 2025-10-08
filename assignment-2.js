// Q1.

var arr = [1, 15, 29, 5, 10, 18, 45, 18, 20, 23];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Q2.

var arr = [1, 15, 29, 5, 10, 18, 45, 18, 20, 23];
sum = 0;
for(i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);

// Q3.

var arr = [1, 15, 29, 5, 10, 18, 45, 18, 20, 23];
sum = 0;
for(i=0;i<arr.length;i++){
    sum+=arr[i];
}
average = sum/arr.length;
console.log(average);

// Q4.

var arr = [1, 15, 29, 5, 10, 18, 45, 18, 20, 23];
var largest = arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(largest);

// Q5.

var arr = [1, 15, 29, 5, 10, 18, 45, 18, 20, 23];
var smallest = arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
}
console.log(smallest);

// Q6.

var arr = [1, 15, 29, 5, 10, 18, 45, 18, 20, 23];
var even = 0;
var odd = 0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even++;
    }
    else{
        odd++;
    }
}
console.log(even);
console.log(odd);

// Q7.

var arr = [1, 15, 29, 5, 10, 18, 45, 18, 20, 23];
for(i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

// Q8.

var arr = [1, 15, 29, 5, 10, 18, -45, -18, 20, 0];
var positivecount=0;
var negativecount=0;
var zerocount=0;
for(i=0;i<arr.length;i++){
    if(arr[i]>0){
        positivecount++;
    }
    else if(arr[i]<0){
        negativecount++;
    }
    else{
        zerocount++;
    }
}
console.log(positivecount);
console.log(negativecount);
console.log(zerocount);

// Q9.

 var arr = [1, 15, 29, 5, 10, 18, 45, 18, 20, 23];
 var limit = 14;
 for(i=0;i<arr.length;i++){
     if(arr[i]>limit){
         console.log(arr[i]);
     }
 }