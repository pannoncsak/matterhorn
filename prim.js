	function prim(p)
	{
		var i=2				
		while( i*i<=p && p%i>0 )  i++
		return i*i<=p ? false : true
 	}
	for( i=2; i<=100000; i++ )
	{
		if( prim(i) )   document.write( i, " ; " )
	}