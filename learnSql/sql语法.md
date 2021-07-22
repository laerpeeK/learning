Store_Information

| Store_Name  | Sales | Txn_Date    |
| ----------- | ----- | ----------- |
| Los Angeles | 1500  | 05-Jan-1999 |
| San Diego   | 250   | 07-Jan-1999 |
| Los Angeles | 300   | 08-Jan-1999 |
| Boston      | 700   | 08-Jan-1999 |

Geography	

| Region_Name | Store_Name  |
| ----------- | ----------- |
| East        | Boston      |
| East        | New York    |
| West        | Los Angeles |
| West        | San Diego   |





SELECT Store_Name FROM Store_Information;

SELECT DISTINCT Store_Name FROM Store_Information;

SELECT Store_Name FROM Store_Information WHERE Sales > 1000;

SELECT Store_Name FROM Store_Information WHERE Sales > 1000 OR (Sales < 500 AND Sales > 275);

SELECT * FROM Store_Information WHERE Store_Name IN ('Los Angeles', 'San Diego');

 SELECT * FROM Store_Information WHERE Txn_Date BETWEEN 'Jan-06-1999' AND 'Jan-10-1999';

SELECT * FROM Store_Information WHERE Store_Name LIKE '%AN%';

SELECT Store_Name, Sales, Txn_Date FROM Store_Information ORDER BY 2 DESC;

SELECT SUM(Sales) FROM Store_Information;

SELECT COUNT(Store_Name) FROM Store_Information WHERE Store_Name IS NOT NULL;

SELECT COUNT(DISTINCT Store_Name) FROM Store_Information;

SELECT Store_Name, SUM(Sales) FROM Store_Information GROUP BT Store_Name;

SELECT Store_Name, SUM(Sales) FROM Store_Information GROUP BY Store_Name HAVING SUM((SALES) > 1500;

SELECT A1.Store_Name Store, SUM(A1.Sales)'Total_Sales' FROM Store_Information A1 GROUP BY A1.Store_Name;

SELECT A1.Region_Name REGION, SUM(A2.Sales) Sales FROM Geography A1, Store_Information A2 WHERE A1.Store_Name = A2.Store_Name GROUP BY A1.Region_Name;

SELECT A1.Store_Name, SUM(A2.Sales) SALES FROM Geography A1, Store_Information A2 WHERE A1.Store_Name = A2.Store_Name(+) GROUP BY A1.Store_Name;

SELECT SUM(Sales) FROM Store_Information WHERE Store_name IN (SELECT store_name FROM Geography WHERE region_name = 'West' )



套式：{ 

'A_Z':  所有以 'A' 起头，另一个任何值的字原，且以 'Z' 为结尾的字串。 'ABZ' 和 'A2Z' 都符合这一个模式，而 'AKKZ' 并不符合 (因为在 A 和 Z 之间有两个字原，而不是一个字原)。

'ABC%':  所有以 'ABC' 起头的字串。举例来说，'ABCD' 和 'ABCABC' 都符合这个套式。

'%XYZ':  所有以 'XYZ' 结尾的字串。举例来说，'WXYZ' 和 'ZZXYZ' 都符合这个套式。

'%AN%':  所有含有 'AN' 这个套式的字串。举例来说， 'LOS ANGELES' 和 'SAN FRANCISCO' 都符合这个套式。

}

排序： {

ASC： 结果会以由小到大的顺序列出。

DESC: 结果会以由大到小的顺序列出。

}

数学运算： {

- **AVG** (平均)
- **COUNT** (计数)
- **MAX** (最大值)
- **MIN** (最小值)
- **SUM** (总合)

}



当我们选不只一个栏位，且其中至少一个栏位有包含函数的运用时，我们就需要用到 **GROUP BY** 这个指令。在这个情况下，我们需要确定我们有 **GROUP BY** 所有其他的栏位

