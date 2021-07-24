关系型数据库本质上是指：这类数据库有多张表，通过关系彼此关联。

关系型数据库每张表有一个主键列，列中的值要能够唯一识别表里的记录。



USE: 选择数据库

SELECT： 选项 AS 别名

FROM：表

WHERE: 判断 

  * = > <

  *  LIKE: 

    ​	%any number of char

    ​	_ single char

	* AND, OR,  IN,  NOT IN

	* BETWEEN  AND
	* REGEXP

* IS NOT NULL

ORDER BY： 排序 DESC降序

LIMIT: offset, num

JOIN 表 ON 条件 (简写)

内连接： 数据库内不同表的连接 

跨数据库连接： 不是当前环境使用的数据库，表前缀要加数据库名

自连接： 给表取不同名字

