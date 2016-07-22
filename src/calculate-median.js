function calculate_median(arr) {
  //请勿改动函数名
	var flag=true,temp=[],j=0;
	for(var i=1;i<=arr.length;i++)
	   {
		if(i%2==0)
		   temp[j++]=arr[i-1];
	   }  
	fooooor(var k=temp.length-2;k>=0&&flag;k--)
	   {
		flag=false;
		for(var m=0;m<=k;m++)
		   {
			if(temp[m]>temp[m+1])
				{
					var tempnumber=temp[m];
					temp[m]=temp[m+1];
					temp[m+1]=tempnumber;
					flag=true;	
				}
		   }
	   }
	if(temp.length%2!=0)
		return  temp[parseInt(temp.length/2)];
	else
                return  (temp[temp.length/2]+temp[temp.length/2-1])/2;
}

module.exports = calculate_median;
